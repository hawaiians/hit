import {
  DocumentData,
  DocumentReference,
  addDoc,
  arrayUnion,
  collection,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import * as admin from "firebase-admin";
import serverSideOnly, { getFirebaseTable } from "./general";
import {
  FirebaseMemberFieldsEnum,
  FirebaseTablesEnum,
  StatusEnum,
  YearsOfExperienceEnum,
} from "@/lib/enums";
import { deleteReferences, getMemberRef } from "./members";
import { getReferences } from "./general";
import { db } from "../firebase";
import { Filter, FilterData, MemberPublic } from "./interfaces";

const statusEnumValues = Object.values(StatusEnum);

export const fieldNameToTable = {
  [FirebaseMemberFieldsEnum.INDUSTRIES]: FirebaseTablesEnum.INDUSTRIES,
  [FirebaseMemberFieldsEnum.FOCUSES]: FirebaseTablesEnum.FOCUSES,
  [FirebaseMemberFieldsEnum.REGIONS]: FirebaseTablesEnum.REGIONS,
};

export const addNewLabel = async (
  id: string,
  newFitler: string,
  filterName: string,
  currentUser: string,
  docRef: admin.firestore.DocumentReference,
) => {
  const memberRefPublic = await getMemberRef(id);
  const newLabelRef = await addLabelRef(
    newFitler,
    fieldNameToTable[filterName],
  );
  await addMemberToLabels([newLabelRef], memberRefPublic);
  const writeResult = await docRef.update({
    [filterName]: admin.firestore.FieldValue.arrayUnion(
      ...[admin.firestore().doc(newLabelRef.path)],
    ),
    last_modified: admin.firestore.FieldValue.serverTimestamp(),
    last_modified_by: currentUser || "admin edit",
  });
  console.log(`Added new label ${newFitler} : ${writeResult}`);
};

export const updateAdminFilterReferences = async (
  referencesToAdd: DocumentReference[],
  referencesToDelete: DocumentReference[],
  docRef: admin.firestore.DocumentReference,
  filterName: string,
  currentUser: string,
) => {
  const adminReferencesToAdd = referencesToAdd.map((ref) =>
    admin.firestore().doc(ref.path),
  );
  const adminReferencesToDelete = referencesToDelete.map((ref) =>
    admin.firestore().doc(ref.path),
  );
  if (adminReferencesToDelete.length !== 0) {
    await docRef.update({
      [filterName]: admin.firestore.FieldValue.arrayRemove(
        ...adminReferencesToDelete,
      ),
      last_modified: admin.firestore.FieldValue.serverTimestamp(),
      last_modified_by: currentUser || "admin edit",
    });
  }
  if (adminReferencesToAdd.length !== 0) {
    await docRef.update({
      [filterName]: admin.firestore.FieldValue.arrayUnion(
        ...adminReferencesToAdd,
      ),
      last_modified: admin.firestore.FieldValue.serverTimestamp(),
      last_modified_by: currentUser || "admin edit",
    });
  }
};

export function getExperienceData(): FilterData[] {
  let return_list = [];
  for (let item in YearsOfExperienceEnum) {
    return_list.push({
      fields: { name: YearsOfExperienceEnum[item] },
      id: item,
    });
  }
  return return_list;
}

export async function addMemberToReferences(
  memberDoc: DocumentReference,
  references: DocumentReference[],
  currentUser?: string,
) {
  for (const reference of references) {
    const documentSnapshot = await getDoc(reference);
    const memberRefs = documentSnapshot.data().members;
    const updatedMemberRefs = memberRefs
      ? memberRefs.concat(memberDoc)
      : [memberDoc];
    await updateDoc(reference, {
      members: updatedMemberRefs,
      last_modified: serverTimestamp(),
      last_modified_by: currentUser || "admin edit",
    });
  }
}

export const updateFilterReferences = async (
  id: string,
  oldReferenceIds: string[],
  newReferenceIds: string[],
  filterName: string,
  currentUser: string,
): Promise<[DocumentReference[], DocumentReference[]]> => {
  const newReferences: DocumentReference[] = await getReferences(
    newReferenceIds,
    fieldNameToTable[filterName],
  );
  const oldReferences = await getReferences(
    oldReferenceIds,
    fieldNameToTable[filterName],
  );
  const referencesToDelete: DocumentReference[] = oldReferences.filter(
    (ref) => !newReferences.includes(ref),
  );
  const referencesToAdd: DocumentReference[] = newReferences.filter(
    (ref) => !oldReferences.includes(ref),
  );
  const memberRefPublic = await getMemberRef(id);
  await deleteReferences(memberRefPublic, referencesToDelete);
  await addMemberToReferences(memberRefPublic, referencesToAdd, currentUser);
  return [referencesToAdd, referencesToDelete];
};

export const addLabelRef = async (
  label: string,
  collectionName: string,
  currentUser?: string,
): Promise<DocumentReference> => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("name", "==", label));
  const querySnapshot = await getDocs(q);
  let docRef: DocumentReference;
  if (!querySnapshot.empty) {
    // Catches the case where the label already exists but it's pending review
    docRef = querySnapshot.docs[0].ref;
  } else {
    docRef = await addDoc(collectionRef, {
      name: label,
      status: StatusEnum.PENDING,
      last_modified: serverTimestamp(),
      last_modified_by: currentUser || "backend default",
      members: [],
    });
  }
  return docRef;
};

export const addMemberToLabels = async (
  labelReferences: DocumentReference[],
  memberRef: DocumentReference,
) => {
  for (const labelRef of labelReferences) {
    await updateDoc(labelRef, {
      members: arrayUnion(memberRef),
      last_modified: serverTimestamp(),
    });
  }
};

export function filterLookup(
  items: DocumentData[],
  memberData?: DocumentReference[],
  isRegionLookup: boolean = false,
): FilterData[] | string | null {
  if (memberData && Array.isArray(memberData) && memberData.length !== 0) {
    const results = memberData.map((item) => {
      return (
        items
          .filter((thisItem) => item.id === thisItem.id)
          .map((item) => {
            return {
              name:
                typeof item.fields["name"] === "string"
                  ? item.fields["name"]
                  : null,
              id: typeof item.id === "string" ? item.id : null,
              status: statusEnumValues.includes(item.fields["status"])
                ? item.fields["status"]
                : null,
            };
          })[0] || null
      );
    });
    // TODO: Allow for users to have multiple regions, temporarily returning
    //  the first region's name
    return isRegionLookup ? results[0].name : results;
  }
  return null;
}

export async function getFiltersBasic(
  members: MemberPublic[],
  filterType: FirebaseTablesEnum | "experience",
  filterData?: DocumentData[],
): Promise<Filter[]> {
  const filterList = [];
  const filters =
    filterData ||
    (filterType == "experience"
      ? getExperienceData()
      : await getFirebaseTable(filterType));
  const returnedFilters = filters.map((role) => {
    return {
      name:
        typeof role.fields["name"] === "string" ? role.fields["name"] : null,
      id: typeof role.id === "string" ? role.id : null,
    };
  });
  returnedFilters.forEach((fil) => {
    filterList.push({
      name: fil.name,
      id: fil.id,
      filterType: filterType,
      members: [],
      count: 0,
      hasApprovedMembers: false,
    });
  });
  const memFil = members.filter((member) =>
    filterType == "experience" ? member.yearsExperience : member.region,
  );
  memFil.forEach((member) => {
    let expIndex = filterList.findIndex(
      (exp) =>
        exp.name ===
        (filterType == "experience" ? member.yearsExperience : member.region),
    );
    if (!filterList[expIndex].hasApprovedMembers)
      filterList[expIndex].hasApprovedMembers = true;
    filterList[expIndex].count++;
    filterList[expIndex].members.push(member.id);
  });
  return filterList;
}

function hasApprovedMembers(
  approvedMemberIds: string[],
  memberList: DocumentData,
): boolean {
  for (const member in memberList) {
    if (approvedMemberIds.includes(memberList[member])) {
      return true;
    }
  }
  return false;
}

export async function getFilters(
  filterType: FirebaseTablesEnum,
  limitByMembers?: boolean,
  approvedMemberIds?: string[],
  filterData?: DocumentData[],
): Promise<Filter[]> {
  const filters = filterData || (await getFirebaseTable(filterType));
  return filters
    .filter(
      (role) =>
        role.fields["name"] &&
        role.fields.status === "approved" &&
        (limitByMembers
          ? hasApprovedMembers(
              approvedMemberIds,
              role.fields["members"].map((member) => member.id),
            )
          : true),
    )
    .map((role) => {
      const member_ids = role.fields["members"].map((member) => member.id);
      return {
        name:
          typeof role.fields["name"] === "string" ? role.fields["name"] : null,
        id: typeof role.id === "string" ? role.id : null,
        filterType: filterType,
        members: Array.isArray(role.fields["members"]) ? member_ids : null,
        count: Array.isArray(role.fields["members"]) ? member_ids.length : 0,
        hasApprovedMembers: limitByMembers
          ? hasApprovedMembers(approvedMemberIds, member_ids)
          : true,
      };
    })
    .sort((a, b) => b.count - a.count);
}

export default serverSideOnly({
  addMemberToLabels,
  addMemberToReferences,
  addNewLabel,
  addLabelRef,
  getExperienceData,
  getFilters,
  getFiltersBasic,
  filterLookup,
  updateFilterReferences,
  updateAdminFilterReferences,
});

import { sendConfirmationEmails } from "@/lib/email";
import {
  FirebaseDefaultValuesEnum,
  FirebaseTablesEnum,
  StatusEnum,
} from "@/lib/enums";
import { db } from "@/lib/firebase";
import { initializeAdmin } from "@/lib/firebase-admin";
import {
  addLabelRef,
  addMemberToLabels,
  addPendingReviewRecord,
} from "@/lib/firebase-helpers/public/directory";
import Client from "@sendgrid/client";
import SendGrid from "@sendgrid/mail";
import * as admin from "firebase-admin";
import {
  addDoc,
  collection,
  doc,
  DocumentReference,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useEmailCloaker } from "helpers";

SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
Client.setApiKey(process.env.SENDGRID_API_KEY);

const addSecureEmail = async (
  email: string,
  memberDocRef: DocumentReference,
) => {
  await initializeAdmin();
  const collectionRef = admin
    .firestore()
    .collection(FirebaseTablesEnum.SECURE_MEMBER_DATA);
  const docRef = collectionRef.doc(memberDocRef.id); // Use memberDocRef ID as new doc ID
  const data = {
    last_modified: admin.firestore.FieldValue.serverTimestamp(),
    last_modified_by: FirebaseDefaultValuesEnum.LAST_MODIFIED_BY,
    email: email,
    member: memberDocRef.path,
  };
  await docRef.set(data);
  return docRef;
};

const addMember = async (member: MemberFields): Promise<DocumentReference> => {
  try {
    const collectionRef = collection(db, FirebaseTablesEnum.MEMBERS);
    const maskedEmail = useEmailCloaker(member.email);
    const data = {
      ...member,
      last_modified: serverTimestamp(),
      last_modified_by: FirebaseDefaultValuesEnum.LAST_MODIFIED_BY,
      masked_email: maskedEmail,
      requests: "",
      status: StatusEnum.PENDING,
      unsubscribed: member.unsubscribed,
    };
    delete data.email; // Don't store email in the member record
    const docRef = await addDoc(collectionRef, data);
    addPendingReviewRecord(docRef, FirebaseTablesEnum.MEMBERS);
    addSecureEmail(member.email, docRef);
    return docRef;
  } catch (error) {
    console.error("Error adding member: ", error);
    throw error;
  }
};

const emailExists = async (email: string): Promise<boolean> => {
  const collectionRef = collection(db, FirebaseTablesEnum.MEMBERS);
  const q = query(collectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return false;
  }
  return true;
};

const idToRef = async (
  labelId: string,
  collectionName: string,
): Promise<DocumentReference> => {
  const collectionRef = collection(db, collectionName);
  const docRef = doc(collectionRef, labelId);
  return docRef;
};

const idsToRefs = async (
  labelIds: string | string[],
  collectionName: string,
): Promise<DocumentReference[]> => {
  if (typeof labelIds === "string") {
    labelIds = [labelIds];
  }
  const refs = [];
  for (const labelId of labelIds) {
    const labelRef = await idToRef(labelId, collectionName);
    refs.push(labelRef);
  }
  return refs;
};

export interface MemberFields {
  name: string;
  email: string;
  location?: string;
  website?: string; // TODO: Remove "website" input param and replace with "link"
  link?: string;
  focusesSelected?: string | string[];
  focusSuggested?: string;
  title?: string;
  yearsExperience?: string;
  industriesSelected?: string | string[];
  industrySuggested?: string;
  companySize?: string;
  recordID?: string;
  unsubscribed?: boolean;
}

const addToFirebase = async (
  fields: MemberFields,
): Promise<DocumentReference> => {
  let member = {
    company_size: fields.companySize,
    email: fields.email,
    focuses: [],
    industries: [],
    link: fields.website, //TODO: Remove "website" input param and replace with "link"
    location: fields.location,
    name: fields.name,
    regions: [],
    title: fields.title,
    years_experience: fields.yearsExperience,
    unsubscribed: fields.unsubscribed,
  };

  // Handle focuses
  let focuses: DocumentReference[] = [];
  if (fields.focusesSelected) {
    const selectedFocusesRefs = await idsToRefs(
      fields.focusesSelected,
      "focuses",
    );
    focuses = [...focuses, ...selectedFocusesRefs];
  }
  if (fields.focusSuggested) {
    const focusRef = await addLabelRef(fields.focusSuggested, "focuses");
    focuses = [...focuses, focusRef];
  }
  if (focuses) member.focuses = focuses;

  // Handle industries
  let industries: DocumentReference[] = [];
  if (fields.industriesSelected) {
    const selectedIndustriesRefs = await idsToRefs(
      fields.industriesSelected,
      "industries",
    );
    industries = [...industries, ...selectedIndustriesRefs];
  }
  if (fields.industrySuggested) {
    const industryRef = await addLabelRef(
      fields.industrySuggested,
      "industries",
    );
    industries = [...industries, industryRef];
  }
  if (industries) member.industries = industries;

  return new Promise(async (resolve, reject) => {
    try {
      const docRef = await addMember(member);
      await addMemberToLabels(focuses, docRef);
      await addMemberToLabels(industries, docRef);
      resolve(docRef);
    } catch (error) {
      console.error("Error adding member:", error);
      reject(error);
    }
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }
  try {
    const {
      email,
      name,
      location,
      title,
      website, // TODO: Remove "website" input param and replace with "link"
    } = req.body;
    const isEmailUsed = await emailExists(email);
    if (isEmailUsed) {
      console.log("🚫 email already exists");
      return res.status(409).json({
        error: "409",
        body: "Sorry, please use a different email.",
      });
    }

    const docRef: DocumentReference = await addToFirebase({
      ...req.body,
    }).then((body) => {
      console.log("✅ added member to firebase");
      return body;
    });
    const { id } = docRef;

    await sendConfirmationEmails({
      email: email,
      recordID: id,
      name: name,
      location: location,
      title: title,
      link: website, // TODO: Remove "website" input param and replace with "link"
    })
      .then(() => {
        console.log("✅ sent 2 emails via sendgrid");
      })
      .catch((error) => {
        console.error("🚫 Error sending email:", error);
        throw error;
      });

    return res.status(200).json({ message: "Successfully added member." });
  } catch (error) {
    // TODO Add more specific error handling
    //      - e.g. addToFirebase from firebase
    //      -      sendConfirmationEmails from sendgrid
    return res.status(error.statusCode || 500).json({
      error: "Gonfunnit, looks like something went wrong!",
      body: "Please try again later.",
    });
  }
}

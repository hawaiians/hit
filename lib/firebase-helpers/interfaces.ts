import { Timestamp } from "firebase/firestore";
import { StatusEnum } from "../enums";

export interface MemberPublic {
  companySize?: string;
  emailAbbr?: string;
  focus?: { name: string; id: string }[] | string[];
  focusSuggested?: string;
  id?: string;
  industry?: { name: string; id: string }[] | string[];
  industrySuggested?: string;
  lastModified?: Timestamp;
  link?: string;
  location?: string;
  name?: string;
  region?: string;
  status?: StatusEnum;
  title?: string;
  unsubscribed?: boolean;
  yearsExperience?: string;
}

export interface MemberPublicEditing extends MemberPublic {
  editing?: { field: string; changeTo: string | string[] }[];
}

export interface MemberSecure extends MemberPublic {
  email?: MemberEmail;
}

export interface RegionPublic {
  name?: string;
  id?: string;
  count?: number;
}

export interface DocumentData {
  id: string;
  fields: any;
}

export interface FilterData {
  id: string;
  name: string;
  status?: StatusEnum;
}

export interface MemberEmail {
  id?: string;
  name?: string;
  email?: string;
  emailAbbr?: string;
  status?: StatusEnum;
  unsubscribed?: boolean;
  unsubKey?: string;
}

export interface Filter {
  name: string;
  id: string;
  filterType: string;
  members?: string[];
  count?: number;
  hasApprovedMembers?: boolean;
}

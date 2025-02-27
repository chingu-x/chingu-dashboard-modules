export enum Forms {
  submitProject = 8,
  checkinSM = 5,
  checkinPO = 4,
  checkIn = 3,
  planning = 2,
  review = 1,
  notes = 0,
}

export enum NotesQuestions {
  notes = 0,
}

export enum PlanningQuestions {
  goal = 5,
  timeline = 4,
}

export enum ReviewQuestions {
  what_right = 3,
  what_to_improve = 2,
  what_to_change = 1,
}

export enum UserRole {
  developer = "Developer",
  productOwner = "Product Owner",
  scrumMaster = "Scrum Master",
}

export type InputType =
  | "radio"
  | "radioGroup"
  | "radioIcon"
  | "checkbox"
  | "boolean"
  | "teamMembersCheckbox"
  | "text"
  | "shortText"
  | "url"
  | "scale";

export interface SubQuestion {
  id: number;
  order: number;
  inputType: { id: number; name: InputType };
  text: string;
  description: string | null;
  answerRequired: boolean;
  multipleAllowed: boolean | null;
  optionGroup: {
    optionChoices: { id: number; text: string }[];
  } | null;
}

export interface Question {
  id: number;
  order: number;
  inputType: { id: number; name: InputType };
  text: string;
  description: string | null;
  answerRequired: boolean;
  multipleAllowed: boolean | null;
  optionGroup: {
    optionChoices: { id: number; text: string }[];
  } | null;
  subQuestions: SubQuestion[];
}

export interface TeamMemberForCheckbox {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
}

export interface FormQuestions {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface CreateFormResponseBody {
  data: {
    [x: string]: (string | string[]) & (string | string[] | undefined);
  };
  questions: Question[];
}

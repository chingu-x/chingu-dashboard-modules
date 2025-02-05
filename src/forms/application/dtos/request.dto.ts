import type {
  CreateFormResponseBody,
  FormResponses,
  Question,
} from "@/forms/application/types";

// client
export interface FetchFormQuestionsClientRequestDto {
  formId: number;
}

export interface FetchWeeklyCheckinFormClientRequestDto {
  voyageTeamRoles: {
    hasScrumMaster: boolean;
    hasProductOwner: boolean;
  };
  currentUserVoyageRole: {
    isScrumMaster: boolean;
    isProductOwner: boolean;
  };
}

export interface SubmitWeeklyCheckinFormClientRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

export interface SubmitVoyageProjectFormClientRequestDto {
  voyageTeamId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

// api
export interface FetchFormQuestionsApiRequestDto {
  formId: number;
}

export interface SubmitWeeklyCheckinFormApiRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  responses: FormResponses[];
}

export interface SubmitVoyageProjectFormApiRequestDto {
  voyageTeamId: number;
  responses: FormResponses[];
}

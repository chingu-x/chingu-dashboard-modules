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

export interface SubmitVoyageProjectFormClientRequestDto {
  voyageTeamId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

// api
export interface FetchFormQuestionsApiRequestDto {
  formId: number;
}

export interface SubmitVoyageProjectFormApiRequestDto {
  voyageTeamId: number;
  responses: FormResponses[];
}

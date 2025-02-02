import type { FetchFormQuestionsResponseDto } from "./response.dto";
import type {
  CreateFormResponseBody,
  FormResponses,
  Question,
} from "@/forms/application/types";

export interface FetchFormQuestionsRequestDto {
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

export interface FetchWeeklyCheckinFormApiRequestDto
  extends FetchWeeklyCheckinFormClientRequestDto {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsRequestDto) => Promise<FetchFormQuestionsResponseDto>;
}

export interface FetchSubmitVoyageProjectFormApiRequestDto {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsRequestDto) => Promise<FetchFormQuestionsResponseDto>;
}

export interface SubmitWeeklyCheckinFormClientRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

export interface SubmitWeeklyCheckinFormApiRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  responses: FormResponses[];
}

export interface SubmitVoyageProjectFormClientRequestDto {
  voyageTeamId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

export interface SubmitVoyageProjectFormApiRequestDto {
  voyageTeamId: number;
  responses: FormResponses[];
}

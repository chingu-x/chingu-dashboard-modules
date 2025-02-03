import type { FetchFormQuestionsResponseDto } from "./response.dto";
import type {
  CreateFormResponseBody,
  FormResponses,
  Question,
} from "@/forms/application/types";

export interface FetchFormQuestionsClientRequestDto {
  formId: number;
}

export type FetchFormQuestionsApiRequestDto =
  FetchFormQuestionsClientRequestDto;

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
  }: FetchFormQuestionsClientRequestDto) => Promise<FetchFormQuestionsResponseDto>;
}

export interface FetchSubmitVoyageProjectFormApiRequestDto {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsClientRequestDto) => Promise<FetchFormQuestionsResponseDto>;
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

import type { FetchFormQuestionsClientRequestDto } from "./request.dto";
import type { FetchFormQuestionsResponseDto } from "./response.dto";
import type {
  CreateFormResponseBody,
  Question,
} from "@/forms/application/types";

export interface FetchFormQuestionsUsecaseDto {
  formId: number;
}

export interface FetchSubmitVoyageProjectFormUsecaseDto {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsClientRequestDto) => Promise<FetchFormQuestionsResponseDto>;
}

export interface FetchWeeklyCheckinFormUsecaseDto {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsClientRequestDto) => Promise<FetchFormQuestionsResponseDto>;
  voyageTeamRoles: {
    hasScrumMaster: boolean;
    hasProductOwner: boolean;
  };
  currentUserVoyageRole: {
    isScrumMaster: boolean;
    isProductOwner: boolean;
  };
}

export interface SubmitVoyageProjectFormUsecaseDto {
  voyageTeamId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

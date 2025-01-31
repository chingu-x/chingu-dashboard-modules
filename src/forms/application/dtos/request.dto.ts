import type { FetchFormQuestionsResponseDto } from "./response.dto";
import type {
  CreateFormResponseBody,
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

export interface SubmitWeeklyCheckinFormClientRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

export interface SubmitWeeklyCheckinFormApiRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  responses: {
    questionId: number;
    text?: string;
    optionChoiceId?: number;
    boolean?: boolean;
    numeric?: number;
  }[];
}

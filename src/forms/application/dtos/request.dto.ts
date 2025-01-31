import type { FetchFormQuestionsResponseDto } from "./response.dto";

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

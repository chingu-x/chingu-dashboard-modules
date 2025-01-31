import type { FetchFormQuestionsResponseDto } from "./response.dto";

export interface FetchFormQuestionsRequestDto {
  formId: number;
}

export interface GetWeeklyCheckinFormClientRequestDto {
  voyageTeamRoles: {
    hasScrumMaster: boolean;
    hasProductOwner: boolean;
  };
  currentUserVoyageRole: {
    isScrumMaster: boolean;
    isProductOwner: boolean;
  };
}

export interface GetWeeklyCheckinFormApiRequestDto
  extends GetWeeklyCheckinFormClientRequestDto {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsRequestDto) => Promise<FetchFormQuestionsResponseDto>;
}

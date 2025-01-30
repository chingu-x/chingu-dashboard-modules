export interface FetchFormQuestionsRequestDto {
  formId: number;
}

export interface GetWeeklyCheckinFormRequestDto {
  formId: number;
  voyageTeamRoles: {
    hasScrumMaster: boolean;
    hasProductOwner: boolean;
  };
  currentUserVoyageRole: boolean;
}

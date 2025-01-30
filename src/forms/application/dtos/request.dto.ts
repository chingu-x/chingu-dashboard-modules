export interface FetchFormQuestionsRequestDto {
  formId: number;
}

export interface GetWeeklyCheckinFormRequestDto {
  voyageTeamRoles: {
    hasScrumMaster: boolean;
    hasProductOwner: boolean;
  };
  currentUserVoyageRole: boolean;
}

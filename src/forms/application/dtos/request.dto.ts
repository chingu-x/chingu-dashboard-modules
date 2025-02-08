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

// api
export interface FetchFormQuestionsApiRequestDto {
  formId: number;
}

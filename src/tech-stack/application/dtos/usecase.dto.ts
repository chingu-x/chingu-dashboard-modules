export interface FetchTechStackUsecaseDto {
  teamId: string;
}

export interface AddTechStackItemUsecaseDto {
  teamId: string;
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

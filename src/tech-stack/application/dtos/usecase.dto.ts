export interface FetchTechStackUsecaseDto {
  teamId: string;
}

export interface AddTechStackItemUsecaseDto {
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

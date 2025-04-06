// client
export interface FetchTechStackClientRequestDto {
  teamId: string;
}

export interface AddTechStackItemClientRequestDto {
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

// api
export interface FetchTechStackApiRequestDto {
  teamId: string;
}

export interface AddTechStackItemApiRequestDto {
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

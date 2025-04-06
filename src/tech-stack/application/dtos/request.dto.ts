// client
export interface FetchTechStackClientRequestDto {
  teamId: string;
}

export interface AddTechStackItemClientRequestDto {
  teamId: string;
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

// api
export interface FetchTechStackApiRequestDto {
  teamId: string;
}

export interface AddTechStackItemApiRequestDto {
  teamId: string;
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

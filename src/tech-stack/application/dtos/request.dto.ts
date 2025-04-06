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

export interface EditTechStackItemClientRequestDto {
  teamTechItemId: number;
  techName: string;
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

export interface EditTechStackItemApiRequestDto {
  teamTechItemId: number;
  techName: string;
}

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

export interface DeleteTechStackItemClientRequestDto {
  teamTechItemId: number;
}

export interface AddTechStackItemVoteClientRequestDto {
  teamTechItemId: number;
}

export interface RemoveTechStackItemVoteClientRequestDto {
  teamTechItemId: number;
}

export interface FinalizeTechStackClientRequestDto {
  techid: number;
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

export interface DeleteTechStackItemApiRequestDto {
  teamTechItemId: number;
}

export interface AddTechStackItemVoteApiRequestDto {
  teamTechItemId: number;
}

export interface RemoveTechStackItemVoteApiRequestDto {
  teamTechItemId: number;
}

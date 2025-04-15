// client
export interface FetchIdeationClientRequestDto {
  teamId: string;
}

export interface AddIdeationClientRequestDto {
  teamId: string;
  title: string;
  description: string;
  vision: string;
}

export interface EditIdeationClientRequestDto {
  ideationId: number;
  title?: string;
  description?: string;
  vision?: string;
}

export interface DeleteIdeationClientRequestDto {
  ideationId: number;
}

export interface AddIdeationVoteClientRequestDto {
  ideationId: number;
}

export interface RemoveIdeationVoteClientRequestDto {
  ideationId: number;
}

export interface FinalizeIdeationClientRequestDto {
  teamId: string;
  ideationId: number;
}

// api
export interface FetchIdeationApiRequestDto {
  teamId: string;
}

export interface AddIdeationApiRequestDto {
  teamId: string;
  title: string;
  description: string;
  vision: string;
}

export interface EditIdeationApiRequestDto {
  ideationId: number;
  title?: string;
  description?: string;
  vision?: string;
}

export interface DeleteIdeationApiRequestDto {
  ideationId: number;
}

export interface AddIdeationVoteApiRequestDto {
  ideationId: number;
}

export interface RemoveIdeationVoteApiRequestDto {
  ideationId: number;
}

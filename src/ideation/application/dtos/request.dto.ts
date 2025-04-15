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

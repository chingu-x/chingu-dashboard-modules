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

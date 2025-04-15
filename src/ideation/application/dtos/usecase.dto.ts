export interface FetchIdeationUsecaseDto {
  teamId: string;
}

export interface AddIdeationUsecaseDto {
  teamId: string;
  title: string;
  description: string;
  vision: string;
}

export interface EditIdeationUsecaseDto {
  ideationId: number;
  title?: string;
  description?: string;
  vision?: string;
}

export interface DeleteIdeationUsecaseDto {
  ideationId: number;
}

export interface AddIdeationVoteUcaseDto {
  ideationId: number;
}

import type { User } from "@/user/application/types";
import type { Ideation } from "@/ideation/application/types";

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

export interface GetIdeationByIdClientRequestDto {
  ideation: Ideation[];
  ideationId: number;
}

export interface IsCurrentUserVoteClientRequestDto {
  ideation: Ideation;
  user: User;
}

export interface HasCurrentUserVoteClientRequestDto {
  ideation: Ideation;
  user: User;
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

export interface FinalizeIdeationApiRequestDto {
  teamId: string;
  ideationId: number;
}

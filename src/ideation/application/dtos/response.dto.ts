import type { Ideation } from "@/ideation/application/types";

export type FetchIdeationResponseDto = Ideation[];

export interface AddIdeationResponseDto {
  id: number;
  voyageTeamMemberId: number;
  title: string;
  description: string;
  vision: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EditIdeationResponseDto {
  id: number;
  voyageTeamMemberId: number;
  title: string;
  description: string;
  vision: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteIdeationResponseDto {
  id: number;
  voyageTeamMemberId: number;
  title: string;
  description: string;
  vision: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AddIdeationVoteResponseDto {
  id: number;
  voyageTeamMemberId: number;
  projectIdeaId: number;
  createdAt: string;
  updatedAt: string;
}

export interface RemoveIdeationVoteResponseDto {
  id: number;
  voyageTeamMemberId: number;
  projectIdeaId: number;
  createdAt: string;
  updatedAt: string;
}

export interface FinalizeIdeationResponseDto {
  id: number;
  voyageTeamMemberId: number;
  title: string;
  description: string;
  vision: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
}

export type GetIdeationByIdResponseDto = Ideation;

export type IsCurrentUserVoteResponseDto = boolean;

export type HasCurrentUserVoteResponseDto = boolean;

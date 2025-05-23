import type {
  TechStackCategory,
  TechStackItemVotes,
} from "@/tech-stack/application/types";

export type FetchTechStackResponseDto = TechStackCategory[];

export interface AddTechStackItemResponseDto {
  teamTechStackItemVoteId: number;
  teamTechId: number;
  teamMemberId: number;
  createdAt: string;
  updatedAt: string;
}

export interface EditTechStackItemResponseDto {
  id: number;
  name: string;
  voyageTeamMemberId: number;
  voyageTeamId: number;
  teamTechStackItemVotes: TechStackItemVotes[];
}

export interface DeleteTechStackItemResponseDto {
  message: string;
  statusCode: number;
}

export interface AddTechStackItemVoteResponseDto {
  teamTechStackItemVoteId: number;
  teamTechId: number;
  teamMemberId: number;
  createdAt: string;
  updatedAt: string;
}

export interface RemoveTechStackItemVoteResponseDto {
  message: string;
  statusCode: number;
}

export interface FinalizeTechStackResponseDto {
  id: number;
  name: string;
  categoryId: number;
  voyageTeamId: number;
  isSelected: boolean;
  voyageTeamMemberId: number;
  createdAt: string;
  updatedAt: string;
}

export type CheckIfFinalizedResponseDto = boolean;

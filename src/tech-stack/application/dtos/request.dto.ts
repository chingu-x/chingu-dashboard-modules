import type { TechStackCategory } from "@/tech-stack/application/types";

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
  techId: number;
  isSelected: boolean;
}

export interface CheckIfFinalizedClientRequestDto {
  techStack: TechStackCategory[];
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

export interface FinalizeTechStackApiRequestDto {
  techId: number;
  isSelected: boolean;
}

import type { TechStackCategory } from "@/tech-stack/application/types";

export interface FetchTechStackUsecaseDto {
  teamId: string;
}

export interface AddTechStackItemUsecaseDto {
  teamId: string;
  techName: string;
  techCategoryId: number;
  voyageTeamMemberId: number;
}

export interface EditTechStackItemUsecaseDto {
  teamTechItemId: number;
  techName: string;
}

export interface DeleteTechStackItemUsecaseDto {
  teamTechItemId: number;
}

export interface AddTechStackItemVoteUsecaseDto {
  teamTechItemId: number;
}

export interface RemoveTechStackItemVoteUsecaseDto {
  teamTechItemId: number;
}

export interface FinalizeTechStackUsecaseDto {
  techId: number;
  isSelected: boolean;
}

export interface CheckIfFinalizedUsecaseDto {
  techStack: TechStackCategory[];
}

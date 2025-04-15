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

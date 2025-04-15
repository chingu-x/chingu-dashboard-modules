import type { Ideation } from "@/ideation/application/types";

export type FetchIdeationClientResponseDto = Ideation[];

export interface AddIdeationClientResponseDto {
  id: number;
  voyageTeamMemberId: number;
  title: string;
  description: string;
  vision: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
}

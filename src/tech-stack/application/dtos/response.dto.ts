import type { TechStackCategory } from "@/tech-stack/application/types";

export type FetchTechStackResponseDto = TechStackCategory[];

export interface AddTechStackItemResponseDto {
  teamTechStackItemVoteId: number;
  teamTechId: number;
  teamMemberId: number;
  createdAt: string;
  updatedAt: string;
}

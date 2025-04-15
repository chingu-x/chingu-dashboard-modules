import { User } from "@/user";
import { Ideation } from "../types";

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

export interface AddIdeationVoteUsecaseDto {
  ideationId: number;
}

export interface RemoveIdeationVoteUsecaseDto {
  ideationId: number;
}

export interface FinalizeIdeationUsecaseDto {
  teamId: string;
  ideationId: number;
}

export interface IsCurrentUserVoteUsecaseDto {
  ideation: Ideation[];
  user: User;
}

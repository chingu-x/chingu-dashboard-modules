import type { FormQuestions } from "@/forms/application/types";

export type FetchFormQuestionsResponseDto = FormQuestions;

export type FetchWeeklyCheckinFormResponseDto = FormQuestions;
export type FetchSubmitVoyageProjectFormResponseDto = FormQuestions;

export interface SubmitWeeklyCheckinFormResponseDto {
  createdAt: string;
  id: number;
  responseGroupId: number;
  sprintId: number;
  voyageTeamMemberId: number;
}

export interface SubmitVoyageProjectFormResponseDto {
  createdAt: string;
  id: number;
  responseGroupId: number;
  voyageTeamMemberId: number;
}

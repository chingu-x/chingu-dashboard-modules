import type { FormQuestions } from "@/forms/application/types";

export type FetchFormQuestionsResponseDto = FormQuestions;

export type FetchWeeklyCheckinFormResponseDto = FetchFormQuestionsResponseDto;
export type FetchSubmitVoyageProjectFormResponseDto =
  FetchFormQuestionsResponseDto;

export interface SubmitWeeklyCheckinFormResponseDto {
  createdAt: Date;
  id: number;
  responseGroupId: number;
  sprintId: number;
  voyageTeamMemberId: number;
}

export type SubmitVoyageProjectFormResponseDto =
  SubmitWeeklyCheckinFormResponseDto;

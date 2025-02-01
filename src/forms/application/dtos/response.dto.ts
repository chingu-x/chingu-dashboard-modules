import type { FormQuestions } from "@/forms/application/types";

export type FetchFormQuestionsResponseDto = FormQuestions;

export type FetchWeeklyCheckinFormResponseDto = FetchFormQuestionsResponseDto;
export type FetchSubmitVoyageProjectFormResponseDto =
  FetchFormQuestionsResponseDto;

export interface SubmitWeeklyCheckinFormResponseDto {
  id: number;
  sprintId: number;
  responseGroupId: number;
}

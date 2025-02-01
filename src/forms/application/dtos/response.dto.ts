import type { FormQuestions } from "@/forms/application/types";

export type FetchFormQuestionsResponseDto = FormQuestions;

export type FetchWeeklyCheckinFormResponseDto = FetchFormQuestionsResponseDto;
export type FetchSubmitVoyageProjectFormRequestDto =
  FetchFormQuestionsResponseDto;

export interface SubmitWeeklyCheckinFormResponseDto {
  id: number;
  sprintId: number;
  responseGroupId: number;
}

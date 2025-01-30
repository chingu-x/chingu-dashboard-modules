import type { Question } from "@/forms/application/types";

export interface FetchFormQuestionsResponseDto {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

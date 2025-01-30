import type { FetchFormQuestionsRequestDto } from "@/forms/application/dtos/request.dto";
import type { FetchFormQuestionsResponseDto } from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchFormQuestions: (
    props: FetchFormQuestionsRequestDto
  ) => Promise<FetchFormQuestionsResponseDto>;
}

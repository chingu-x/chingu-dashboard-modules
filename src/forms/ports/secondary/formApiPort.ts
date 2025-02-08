import type { FetchFormQuestionsApiRequestDto } from "@/forms/application/dtos/request.dto";
import type { FetchFormQuestionsResponseDto } from "@/forms/application/dtos/response.dto";

export interface FormsApiPort {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsApiRequestDto) => Promise<FetchFormQuestionsResponseDto>;
}

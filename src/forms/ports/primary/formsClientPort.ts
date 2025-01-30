import type {
  FetchFormQuestionsRequestDto,
  GetWeeklyCheckinFormRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchFormQuestionsResponseDto,
  GetWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchFormQuestions: (
    props: FetchFormQuestionsRequestDto
  ) => Promise<FetchFormQuestionsResponseDto>;

  getWeeklyCheckinForm: (
    props: GetWeeklyCheckinFormRequestDto
  ) => GetWeeklyCheckinFormResponseDto;
}

import type {
  FetchFormQuestionsRequestDto,
  SubmitWeeklyCheckinFormRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchFormQuestionsResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsApiPort {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsRequestDto) => Promise<FetchFormQuestionsResponseDto>;

  submitWeeklyCheckinForm: ({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinFormRequestDto) => Promise<SubmitWeeklyCheckinFormResponseDto>;
}

import type {
  FetchFormQuestionsRequestDto,
  SubmitWeeklyCheckinFormApiRequestDto,
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
  }: SubmitWeeklyCheckinFormApiRequestDto) => Promise<SubmitWeeklyCheckinFormResponseDto>;
}

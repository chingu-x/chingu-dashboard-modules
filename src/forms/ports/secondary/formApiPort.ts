import type {
  FetchFormQuestionsApiRequestDto,
  SubmitVoyageProjectFormApiRequestDto,
  SubmitWeeklyCheckinFormApiRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchFormQuestionsResponseDto,
  SubmitVoyageProjectFormResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsApiPort {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsApiRequestDto) => Promise<FetchFormQuestionsResponseDto>;

  submitWeeklyCheckinForm: ({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinFormApiRequestDto) => Promise<SubmitWeeklyCheckinFormResponseDto>;

  submitVoyageProjectForm: ({
    voyageTeamId,
    responses,
  }: SubmitVoyageProjectFormApiRequestDto) => Promise<SubmitVoyageProjectFormResponseDto>;
}

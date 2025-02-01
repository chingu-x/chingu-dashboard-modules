import type {
  FetchFormQuestionsRequestDto,
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
  }: FetchFormQuestionsRequestDto) => Promise<FetchFormQuestionsResponseDto>;

  submitWeeklyCheckinForm: ({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinFormApiRequestDto) => Promise<SubmitWeeklyCheckinFormResponseDto>;

  submitVoyageProjectForm: ({
    voyageTeamMemberId,
    responses,
  }: SubmitVoyageProjectFormApiRequestDto) => Promise<SubmitVoyageProjectFormResponseDto>;
}

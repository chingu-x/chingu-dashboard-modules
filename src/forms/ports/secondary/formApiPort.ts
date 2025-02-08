import type {
  FetchFormQuestionsApiRequestDto,
  SubmitVoyageProjectFormApiRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchFormQuestionsResponseDto,
  SubmitVoyageProjectFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsApiPort {
  fetchFormQuestions: ({
    formId,
  }: FetchFormQuestionsApiRequestDto) => Promise<FetchFormQuestionsResponseDto>;

  submitVoyageProjectForm: ({
    voyageTeamId,
    responses,
  }: SubmitVoyageProjectFormApiRequestDto) => Promise<SubmitVoyageProjectFormResponseDto>;
}

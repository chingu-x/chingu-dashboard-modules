import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import {
  FetchFormQuestionsRequestDto,
  SubmitVoyageProjectFormApiRequestDto,
  SubmitWeeklyCheckinFormApiRequestDto,
} from "@/forms/application/dtos/request.dto";
import {
  FetchFormQuestionsResponseDto,
  SubmitVoyageProjectFormResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";
import FormsUrls from "@/forms/application/constants/formsUrls";
import { FormsApiPort } from "@/forms/ports/secondary/formApiPort";

@injectable()
export class FormsApiAdapter implements FormsApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchFormQuestions({
    formId,
  }: FetchFormQuestionsRequestDto): Promise<FetchFormQuestionsResponseDto> {
    return await this.apiClient.get({
      url: FormsUrls.fetchFormQuestions(formId),
    });
  }

  async submitWeeklyCheckinForm({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinFormApiRequestDto): Promise<SubmitWeeklyCheckinFormResponseDto> {
    return await this.apiClient.post({
      url: FormsUrls.submitWeeklyCheckinForm(),
      payload: { voyageTeamMemberId, sprintId, responses },
    });
  }

  async submitVoyageProjectForm({
    voyageTeamMemberId,
    responses,
  }: SubmitVoyageProjectFormApiRequestDto): Promise<SubmitVoyageProjectFormResponseDto> {
    return await this.apiClient.post({
      url: FormsUrls.submitVoyageProjectForm(),
      payload: { voyageTeamMemberId, responses },
    });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { FetchFormQuestionsRequestDto } from "@/forms/application/dtos/request.dto";
import { FetchFormQuestionsResponseDto } from "@/forms/application/dtos/response.dto";
import FormsUrls from "@/forms/application/constants/formsUrls";

@injectable()
export class FormsApiAdapter implements FormsApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort
  ) {}

  async fetchFormQuestions({
    formId,
  }: FetchFormQuestionsRequestDto): Promise<FetchFormQuestionsResponseDto> {
    return await this.apiClient.get({
      url: FormsUrls.fetchFormQuestions(formId),
    });
  }
}

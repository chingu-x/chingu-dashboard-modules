import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FormsApiPort } from "@/forms/ports/secondary/form-api-port";
import { FetchFormQuestionsUsecaseDto } from "@/forms/application/dtos/usecase.dto";
import { FetchFormQuestionsResponseDto } from "@/forms/application/dtos/response.dto";

@injectable()
export class FetchFormQuestionsUsecase {
  constructor(
    @inject(TYPES.FormsApiPort)
    private readonly formsApi: FormsApiPort,
  ) {}

  async execute(
    props: FetchFormQuestionsUsecaseDto,
  ): Promise<FetchFormQuestionsResponseDto> {
    return await this.formsApi.fetchFormQuestions({
      ...props,
    });
  }
}

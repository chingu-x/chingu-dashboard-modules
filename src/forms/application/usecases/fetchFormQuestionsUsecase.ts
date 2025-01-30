import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import { FetchFormQuestionsRequestDto } from "@/forms/application/dtos/request.dto";
import { FetchFormQuestionsResponseDto } from "@/forms/application/dtos/response.dto";

@injectable()
export class FetchFormQuestionsUsecase {
  constructor(
    @inject(TYPES.FormsApiPort)
    private readonly formsApi: FormsApiPort,
  ) {}

  async execute(
    props: FetchFormQuestionsRequestDto,
  ): Promise<FetchFormQuestionsResponseDto> {
    return await this.formsApi.fetchFormQuestions({
      ...props,
    });
  }
}

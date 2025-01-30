import { inject, injectable } from "tsyringe";
import { FetchFormQuestionsRequestDto } from "@/forms/application/dtos/request.dto";
import { FetchFormQuestionsResponseDto } from "@/forms/application/dtos/response.dto";
import { FormsClientPort } from "@/forms/ports/primary/formsClientPort";

@injectable()
export class FormsClientAdapter implements FormsClientPort {
  constructor(
    @inject(TYPES.FetchFormQuestionsUsecase)
    private readonly fetchFormQuestionsUsecase: FetchFormQuestionsUsecase
  ) {}

  async fetchFormQuestions({
    formId,
  }: FetchFormQuestionsRequestDto): Promise<FetchFormQuestionsResponseDto> {
    return await this.fetchFormQuestionsUsecase.execute({ formId });
  }
}

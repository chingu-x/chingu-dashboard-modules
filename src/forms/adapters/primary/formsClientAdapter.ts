import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import {
  FetchFormQuestionsRequestDto,
  GetWeeklyCheckinFormRequestDto,
} from "@/forms/application/dtos/request.dto";
import {
  FetchFormQuestionsResponseDto,
  GetWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";
import { FormsClientPort } from "@/forms/ports/primary/formsClientPort";
import { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";
import { GetWeeklyCheckinFormUsecase } from "@/forms/application/usecases/getWeeklyCheckinFormUsecase";

@injectable()
export class FormsClientAdapter implements FormsClientPort {
  constructor(
    @inject(TYPES.FetchFormQuestionsUsecase)
    private readonly fetchFormQuestionsUsecase: FetchFormQuestionsUsecase,

    @inject(TYPES.GetWeeklyCheckinFormUsecase)
    private readonly getWeeklyCheckinFormUsecase: GetWeeklyCheckinFormUsecase
  ) {}

  private async fetchFormQuestions({
    formId,
  }: FetchFormQuestionsRequestDto): Promise<FetchFormQuestionsResponseDto> {
    return await this.fetchFormQuestionsUsecase.execute({ formId });
  }

  async getWeeklyCheckinForm({
    voyageTeamRoles,
    currentUserVoyageRole,
  }: GetWeeklyCheckinFormRequestDto): Promise<GetWeeklyCheckinFormResponseDto> {
    return await this.getWeeklyCheckinFormUsecase.execute({
      voyageTeamRoles,
      currentUserVoyageRole,
    });
  }
}

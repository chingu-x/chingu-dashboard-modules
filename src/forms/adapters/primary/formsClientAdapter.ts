import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import {
  FetchFormQuestionsClientRequestDto,
  FetchWeeklyCheckinFormClientRequestDto,
  SubmitVoyageProjectFormClientRequestDto,
} from "@/forms/application/dtos/request.dto";
import {
  FetchFormQuestionsResponseDto,
  FetchSubmitVoyageProjectFormResponseDto,
  FetchWeeklyCheckinFormResponseDto,
  SubmitVoyageProjectFormResponseDto,
} from "@/forms/application/dtos/response.dto";
import { FormsClientPort } from "@/forms/ports/primary/formsClientPort";
import { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";
import { FetchWeeklyCheckinFormUsecase } from "@/forms/application/usecases/fetchWeeklyCheckinFormUsecase";
import { FetchSubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/fetchSubmitVoyageProjectFormUsecase";
import { SubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/submitVoyageProjectFormUsecase";

@injectable()
export class FormsClientAdapter implements FormsClientPort {
  constructor(
    @inject(TYPES.FetchFormQuestionsUsecase)
    private readonly fetchFormQuestionsUsecase: FetchFormQuestionsUsecase,

    @inject(TYPES.FetchWeeklyCheckinFormUsecase)
    private readonly fetchWeeklyCheckinFormUsecase: FetchWeeklyCheckinFormUsecase,

    @inject(TYPES.FetchSubmitVoyageProjectFormUsecase)
    private readonly fetchSubmitVoyageProjectFormUsecase: FetchSubmitVoyageProjectFormUsecase,

    @inject(TYPES.SubmitVoyageProjectFormUsecase)
    private readonly submitVoyageProjectFormUsecase: SubmitVoyageProjectFormUsecase,
  ) {}

  private async fetchFormQuestions({
    formId,
  }: FetchFormQuestionsClientRequestDto): Promise<FetchFormQuestionsResponseDto> {
    return await this.fetchFormQuestionsUsecase.execute({ formId });
  }

  async fetchWeeklyCheckinForm({
    voyageTeamRoles,
    currentUserVoyageRole,
  }: FetchWeeklyCheckinFormClientRequestDto): Promise<FetchWeeklyCheckinFormResponseDto> {
    return await this.fetchWeeklyCheckinFormUsecase.execute({
      fetchFormQuestions: this.fetchFormQuestions.bind(this),
      voyageTeamRoles,
      currentUserVoyageRole,
    });
  }

  async fetchSubmitVoyageProjectForm(): Promise<FetchSubmitVoyageProjectFormResponseDto> {
    return await this.fetchSubmitVoyageProjectFormUsecase.execute({
      fetchFormQuestions: this.fetchFormQuestions.bind(this),
    });
  }

  async submitVoyageProjectForm({
    voyageTeamId,
    data,
    questions,
  }: SubmitVoyageProjectFormClientRequestDto): Promise<SubmitVoyageProjectFormResponseDto> {
    return await this.submitVoyageProjectFormUsecase.execute({
      voyageTeamId,
      data,
      questions,
    });
  }
}

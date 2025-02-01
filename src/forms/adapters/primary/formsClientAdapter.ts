import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import {
  FetchFormQuestionsRequestDto,
  FetchWeeklyCheckinFormClientRequestDto,
  SubmitVoyageProjectFormClientRequestDto,
  SubmitWeeklyCheckinFormClientRequestDto,
} from "@/forms/application/dtos/request.dto";
import {
  FetchFormQuestionsResponseDto,
  FetchSubmitVoyageProjectFormResponseDto,
  FetchWeeklyCheckinFormResponseDto,
  SubmitVoyageProjectFormResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";
import { FormsClientPort } from "@/forms/ports/primary/formsClientPort";
import { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";
import { FetchWeeklyCheckinFormUsecase } from "@/forms/application/usecases/fetchWeeklyCheckinFormUsecase";
import { SubmitWeeklyCheckinFormUsecase } from "@/forms/application/usecases/submitWeeklyCheckinFormUsecase";
import { FetchSubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/fetchSubmitVoyageProjectFormUsecase";

@injectable()
export class FormsClientAdapter implements FormsClientPort {
  constructor(
    @inject(TYPES.FetchFormQuestionsUsecase)
    private readonly fetchFormQuestionsUsecase: FetchFormQuestionsUsecase,

    @inject(TYPES.FetchWeeklyCheckinFormUsecase)
    private readonly fetchWeeklyCheckinFormUsecase: FetchWeeklyCheckinFormUsecase,

    @inject(TYPES.SubmitWeeklyCheckinFormUsecase)
    private readonly submitWeeklyCheckinFormUsecase: SubmitWeeklyCheckinFormUsecase,

    @inject(TYPES.FetchSubmitVoyageProjectFormUsecase)
    private readonly fetchSubmitVoyageProjectFormUsecase: FetchSubmitVoyageProjectFormUsecase,

    @inject(TYPES.SubmitVoyageProjectFormUsecase)
    private readonly submitVoyageProjectFormUsecase: SubmitVoyageProjectFormUsecase,
  ) {}

  private async fetchFormQuestions({
    formId,
  }: FetchFormQuestionsRequestDto): Promise<FetchFormQuestionsResponseDto> {
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

  async submitWeeklyCheckinForm({
    voyageTeamMemberId,
    sprintId,
    data,
    questions,
  }: SubmitWeeklyCheckinFormClientRequestDto): Promise<SubmitWeeklyCheckinFormResponseDto> {
    return await this.submitWeeklyCheckinFormUsecase.execute({
      voyageTeamMemberId,
      sprintId,
      data,
      questions,
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

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsClientPort } from "@/sprints/ports/primary/sprints-client-port";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetch-sprints-usecase";
import {
  FetchSprintsClientRequestDto,
  GetCurrentSprintClientRequestDto,
  GetSprintByNumberClientRequestDto,
  GetSprintCheckinStatusClientRequestDto,
  IsCurrentSprintClientRequestDto,
  IsVoyageProjestSubmissionAllowedClientRequestDto,
  SubmitVoyageProjectClientRequestDto,
  SubmitWeeklyCheckinClientRequestDto,
} from "@/sprints/application/dtos/request.dto";
import {
  FetchAllSprintsResponseDto,
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetSprintByNumberResponseDto,
  GetSprintCheckinStatusResponseDto,
  IsCurrentSprintResponseDto,
  IsVoyageProjestSubmissionAllowedResponseDto,
  SubmitVoyageProjectResponseDto,
  SubmitWeeklyCheckinResponseDto,
} from "@/sprints/application/dtos/response.dto";
import { GetCurrentSprintUsecase } from "@/sprints/application/usecases/get-current-sprint-usecase";
import { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/get-sprint-checkin-status-usecase";
import { IsCurrentSprintUsecase } from "@/sprints/application/usecases/is-current-sprint-usecase";
import { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/is-voyage-projest-submission-allowed-usecase";
import { SubmitWeeklyCheckinUsecase } from "@/sprints/application/usecases/submit-weekly-checkin-usecase";
import { SubmitVoyageProjectUsecase } from "@/sprints/application/usecases/submit-voyage-project-usecase";
import { GetSprintByNumberUsecase } from "@/sprints/application/usecases/get-sprint-by-number-usecase";
import { FetchAllSprintsUsecase } from "@/sprints/application/usecases/fetch-all-sprints-usecase";

@injectable()
export class SprintsClientAdapter implements SprintsClientPort {
  constructor(
    @inject(TYPES.FetchSprintsUsecase)
    private readonly fetchSprintsUsecase: FetchSprintsUsecase,

    @inject(TYPES.GetCurrentSprintUsecase)
    private readonly getCurrentSprintUsecase: GetCurrentSprintUsecase,

    @inject(TYPES.GetSprintCheckinStatusUsecase)
    private readonly getSprintCheckinStatusUsecase: GetSprintCheckinStatusUsecase,

    @inject(TYPES.IsCurrentSprintUsecase)
    private readonly isCurrentSprintUsecase: IsCurrentSprintUsecase,

    @inject(TYPES.IsVoyageProjestSubmissionAllowedUsecase)
    private readonly isVoyageProjestSubmissionAllowedUsecase: IsVoyageProjestSubmissionAllowedUsecase,

    @inject(TYPES.SubmitWeeklyCheckinUsecase)
    private readonly submitWeeklyCheckinUsecase: SubmitWeeklyCheckinUsecase,

    @inject(TYPES.SubmitVoyageProjectUsecase)
    private readonly submitVoyageProjectUsecase: SubmitVoyageProjectUsecase,

    @inject(TYPES.GetSprintByNumberUsecase)
    private readonly getSprintByNumberUsecase: GetSprintByNumberUsecase,

    @inject(TYPES.FetchAllSprintsUsecase)
    private readonly fetchAllSprintsUsecase: FetchAllSprintsUsecase,
  ) {}

  fetchSprints({
    teamId,
  }: FetchSprintsClientRequestDto): Promise<FetchSprintsResponseDto> {
    return this.fetchSprintsUsecase.execute({ teamId });
  }

  getCurrentSprint({
    currentDate,
    sprints,
  }: GetCurrentSprintClientRequestDto):
    | GetCurrentSprintResponseDto
    | undefined {
    return this.getCurrentSprintUsecase.execute({ sprints, currentDate });
  }

  getSprintCheckinStatus({
    user,
    sprintId,
  }: GetSprintCheckinStatusClientRequestDto): GetSprintCheckinStatusResponseDto {
    return this.getSprintCheckinStatusUsecase.execute({ user, sprintId });
  }

  isCurrentSprint({
    sprintNumber,
    currentSprintNumber,
  }: IsCurrentSprintClientRequestDto): IsCurrentSprintResponseDto {
    return this.isCurrentSprintUsecase.execute({
      sprintNumber,
      currentSprintNumber,
    });
  }

  isVoyageProjestSubmissionAllowed({
    sprintNumber,
  }: IsVoyageProjestSubmissionAllowedClientRequestDto): IsVoyageProjestSubmissionAllowedResponseDto {
    return this.isVoyageProjestSubmissionAllowedUsecase.execute({
      sprintNumber,
    });
  }

  async submitWeeklyCheckin({
    voyageTeamMemberId,
    sprintId,
    data,
    questions,
  }: SubmitWeeklyCheckinClientRequestDto): Promise<SubmitWeeklyCheckinResponseDto> {
    return await this.submitWeeklyCheckinUsecase.execute({
      voyageTeamMemberId,
      sprintId,
      data,
      questions,
    });
  }

  async submitVoyageProject({
    voyageTeamId,
    data,
    questions,
  }: SubmitVoyageProjectClientRequestDto): Promise<SubmitVoyageProjectResponseDto> {
    return await this.submitVoyageProjectUsecase.execute({
      voyageTeamId,
      data,
      questions,
    });
  }

  getSprintByNumber({
    sprints,
    sprintNumber,
  }: GetSprintByNumberClientRequestDto): GetSprintByNumberResponseDto {
    return this.getSprintByNumberUsecase.execute({ sprints, sprintNumber });
  }

  async fetchAllSprints(): Promise<FetchAllSprintsResponseDto> {
    return await this.fetchAllSprintsUsecase.execute();
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsClientPort } from "@/sprints/ports/primary/sprintsClientPort";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";
import {
  FetchSprintsClientRequestDto,
  GetCurrentSprintClientRequestDto,
  GetMeetingClientRequestDto,
  GetSprintCheckinStatusClientRequestDto,
  IsCurrentSprintClientRequestDto,
  IsVoyageProjestSubmissionAllowedClientRequestDto,
  SubmitWeeklyCheckinClientRequestDto,
} from "@/sprints/application/dtos/request.dto";
import {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetMeetingResponseDto,
  GetSprintCheckinStatusResponseDto,
  IsCurrentSprintResponseDto,
  IsVoyageProjestSubmissionAllowedResponseDto,
  SubmitWeeklyCheckinResponseDto,
} from "@/sprints/application/dtos/response.dto";
import { GetCurrentSprintUsecase } from "@/sprints/application/usecases/getCurrentSprintUsecase";
import { GetMeetingUsecase } from "@/sprints/application/usecases/getMeetingUsecase";
import { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/getSprintCheckinStatusUsecase";
import { IsCurrentSprintUsecase } from "@/sprints/application/usecases/isCurrentSprintUsecase";
import { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/isVoyageProjestSubmissionAllowedUsecase";
import { SubmitWeeklyCheckinUsecase } from "@/sprints/application/usecases/submitWeeklyCheckinUsecase";

@injectable()
export class SprintsClientAdapter implements SprintsClientPort {
  constructor(
    @inject(TYPES.FetchSprintsUsecase)
    private readonly fetchSprintsUsecase: FetchSprintsUsecase,

    @inject(TYPES.GetCurrentSprintUsecase)
    private readonly getCurrentSprintUsecase: GetCurrentSprintUsecase,

    @inject(TYPES.GetMeetingUsecase)
    private readonly getMeetingUsecase: GetMeetingUsecase,

    @inject(TYPES.GetSprintCheckinStatusUsecase)
    private readonly getSprintCheckinStatusUsecase: GetSprintCheckinStatusUsecase,

    @inject(TYPES.IsCurrentSprintUsecase)
    private readonly isCurrentSprintUsecase: IsCurrentSprintUsecase,

    @inject(TYPES.IsVoyageProjestSubmissionAllowedUsecase)
    private readonly isVoyageProjestSubmissionAllowedUsecase: IsVoyageProjestSubmissionAllowedUsecase,

    @inject(TYPES.SubmitWeeklyCheckinUsecase)
    private readonly submitWeeklyCheckinUsecase: SubmitWeeklyCheckinUsecase,
  ) {}

  // gets the current voyage team
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

  getMeeting({
    sprints,
    sprintNumber,
  }: GetMeetingClientRequestDto): GetMeetingResponseDto | null {
    return this.getMeetingUsecase.execute({ sprints, sprintNumber });
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
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsClientPort } from "@/sprints/ports/primary/sprintsClientPort";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";
import {
  ConvertStringToDateRequestDto,
  FetchSprintsClientRequestDto,
  GetCurrentSprintRequestDto,
  GetMeetingRequestDto,
  GetSprintCheckinStatusRequestDto,
  IsCurrentSprintRequestDto,
  IsVoyageProjestSubmissionAllowedRequestDto,
} from "@/sprints/application/dtos/request.dto";
import {
  ConvertStringToDateResponseDto,
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetMeetingResponseDto,
  GetSprintCheckinStatusResponseDto,
  IsCurrentSprintResponseDto,
  IsVoyageProjestSubmissionAllowedResponseDto,
} from "@/sprints/application/dtos/response.dto";
import { GetCurrentSprintUsecase } from "@/sprints/application/usecases/getCurrentSprintUsecase";
import { GetMeetingUsecase } from "@/sprints/application/usecases/getMeetingUsecase";
import { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/getSprintCheckinStatusUsecase";
import { IsCurrentSprintUsecase } from "@/sprints/application/usecases/isCurrentSprintUsecase";
import { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/isVoyageProjestSubmissionAllowedUsecase";

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
  }: GetCurrentSprintRequestDto): GetCurrentSprintResponseDto | undefined {
    return this.getCurrentSprintUsecase.execute({ sprints, currentDate });
  }

  getMeeting({
    sprints,
    sprintNumber,
  }: GetMeetingRequestDto): GetMeetingResponseDto | null {
    return this.getMeetingUsecase.execute({ sprints, sprintNumber });
  }

  getSprintCheckinStatus({
    user,
    sprintId,
  }: GetSprintCheckinStatusRequestDto): GetSprintCheckinStatusResponseDto {
    return this.getSprintCheckinStatusUsecase.execute({ user, sprintId });
  }

  isCurrentSprint({
    sprintNumber,
    currentSprintNumber,
  }: IsCurrentSprintRequestDto): IsCurrentSprintResponseDto {
    return this.isCurrentSprintUsecase.execute({
      sprintNumber,
      currentSprintNumber,
    });
  }

  isVoyageProjestSubmissionAllowed({
    sprintNumber,
  }: IsVoyageProjestSubmissionAllowedRequestDto): IsVoyageProjestSubmissionAllowedResponseDto {
    return this.isVoyageProjestSubmissionAllowedUsecase.execute({
      sprintNumber,
    });
  }

  convertStringToDate({
    dateTime,
    timezone,
  }: ConvertStringToDateRequestDto): ConvertStringToDateResponseDto {
    return this.convertStringToDate({ dateTime, timezone });
  }
}

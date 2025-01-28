import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsClientPort } from "@/sprints/ports/primary/sprintsClientPort";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";
import {
  FetchSprintsClientRequestDto,
  GetCurrentSprintRequestDto,
  GetMeetingRequestDto,
  GetSprintCheckinStatusRequestDto,
} from "@/sprints/application/dtos/request.dto";
import {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetMeetingResponseDto,
  GetSprintCheckinStatusResponseDto,
} from "@/sprints/application/dtos/response.dto";
import { GetCurrentSprintUsecase } from "@/sprints/application/usecases/getCurrentSprintUsecase";
import { GetMeetingUsecase } from "@/sprints/application/usecases/getMeetingUsecase";

@injectable()
export class SprintsClientAdapter implements SprintsClientPort {
  constructor(
    @inject(TYPES.FetchSprintsUsecase)
    private readonly fetchSprintsUsecase: FetchSprintsUsecase,

    @inject(TYPES.GetCurrentSprintUsecase)
    private readonly getCurrentSprintUsecase: GetCurrentSprintUsecase,

    @inject(TYPES.GetMeetingUsecase)
    private readonly getMeetingUsecase: GetMeetingUsecase,
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
    sprintNum,
  }: GetSprintCheckinStatusRequestDto): GetSprintCheckinStatusResponseDto {}
}

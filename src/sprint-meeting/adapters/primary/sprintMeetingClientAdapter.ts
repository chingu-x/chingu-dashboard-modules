import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingClientPort } from "@/sprint-meeting/ports/primary/sprintMeetingClientPort";
import {
  AddMeetingClientRequestDto,
  FetchMeetingClientRequestDto,
  GetCurrentSprintMeetingIdClientRequesDto,
  GetCurrentSprintMeetingClientRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import {
  AddMeetingResponseDto,
  FetchMeetingResponseDto,
  GetCurrentSprintMeetingIdResponseDto,
  GetCurrentSprintMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import { GetCurrentSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingId";
import { GetCurrentSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingUsecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";

@injectable()
export class SprintMeetingClientAdapter implements SprintMeetingClientPort {
  constructor(
    @inject(TYPES.FetchMeetingUsecase)
    private readonly fetchMeetingUsecase: FetchMeetingUsecase,

    @inject(TYPES.GetCurrentSprintMeetingIdUsecase)
    private readonly getCurrentSprintMeetingIdUsecase: GetCurrentSprintMeetingIdUsecase,

    @inject(TYPES.GetCurrentSprintMeetingUsecase)
    private readonly getCurrentSprintMeetingUsecase: GetCurrentSprintMeetingUsecase,

    @inject(TYPES.AddMeetingUsecase)
    private readonly addMeetingUsecase: AddMeetingUsecase,
  ) {}

  async fetchMeeting({
    meetingId,
  }: FetchMeetingClientRequestDto): Promise<FetchMeetingResponseDto> {
    return await this.fetchMeetingUsecase.execute({ meetingId });
  }

  getCurrentSprintMeetingId({
    sprints,
    sprintNumber,
  }: GetCurrentSprintMeetingIdClientRequesDto): GetCurrentSprintMeetingIdResponseDto {
    return this.getCurrentSprintMeetingIdUsecase.execute({
      sprints,
      sprintNumber,
    });
  }

  getCurrentSprintMeeting({
    meeting,
    meetingId,
  }: GetCurrentSprintMeetingClientRequestDto):
    | GetCurrentSprintMeetingResponseDto
    | undefined {
    return this.getCurrentSprintMeetingUsecase.execute({
      meeting,
      meetingId,
    });
  }

  async addMeeting({
    data,
    teamId,
    sprintNumber,
    timezone,
  }: AddMeetingClientRequestDto): Promise<AddMeetingResponseDto> {
    return await this.addMeetingUsecase.execute({
      data,
      teamId,
      sprintNumber,
      timezone,
    });
  }
}

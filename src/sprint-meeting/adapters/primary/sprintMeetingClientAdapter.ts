import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingClientPort } from "@/sprint-meeting/ports/primary/sprintMeetingClientPort";
import {
  FetchMeetingRequestDto,
  GetCurrentSprintMeetingIdRequesDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import {
  FetchMeetingResponseDto,
  GetCurrentSprintMeetingIdResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import { GetCurrentSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingId";

@injectable()
export class SprintMeetingClientAdapter implements SprintMeetingClientPort {
  constructor(
    @inject(TYPES.FetchMeetingUsecase)
    private readonly fetchMeetingUsecase: FetchMeetingUsecase,

    @inject(TYPES.GetCurrentSprintMeetingIdUsecase)
    private readonly getCurrentSprintMeetingIdUsecase: GetCurrentSprintMeetingIdUsecase,

    @inject(TYPES.GetCurrentSprintMeetingUsecase)
    private readonly getCurrentSprintMeetingUsecase: GetCurrentSprintMeetingUsecase,
  ) {}

  async fetchMeeting({
    meetingId,
  }: FetchMeetingRequestDto): Promise<FetchMeetingResponseDto> {
    return await this.fetchMeetingUsecase.execute({ meetingId });
  }

  getCurrentSprintMeetingId({
    sprints,
    sprintNumber,
  }: GetCurrentSprintMeetingIdRequesDto): GetCurrentSprintMeetingIdResponseDto {
    return this.getCurrentSprintMeetingIdUsecase.execute({
      sprints,
      sprintNumber,
    });
  }

  getCurrentSprintMeeting({
    sprints,
    meetingId,
  }: GetCurrentSprintMeetingRequestDto): GetCurrentSprintMeetingResponseDto {
    return this.getCurrentSprintMeetingUsecase.execute({
      sprints,
      meetingId,
    });
  }
}

import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { FetchMeetingRequestDto } from "@/sprint-meeting/application/dtos/request.dto";
import { FetchMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class FetchMeetingUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute(
    props: FetchMeetingRequestDto,
  ): Promise<FetchMeetingResponseDto> {
    return await this.sprintMeetingApi.fetchMeeting({ ...props });
  }
}

import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { EditMeetingUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { EditMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class EditMeetingUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    ...data
  }: EditMeetingUsecaseDto): Promise<EditMeetingResponseDto> {
    return await this.sprintMeetingApi.editMeeting({ meetingId, ...data });
  }
}

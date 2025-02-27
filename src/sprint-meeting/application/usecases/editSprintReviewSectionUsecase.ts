import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";

@injectable()
export class EditSprintReviewSectionUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    data,
  }: EditSprintMeetingSectionUsecaseDto): Promise<EditSprintMeetingSectionResponseDto> {
    return await this.sprintMeetingApi.addMeeting(payload);
  }
}

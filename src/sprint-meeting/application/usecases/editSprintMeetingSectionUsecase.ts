import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { EditSprintMeetingSectionUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { EditSprintMeetingSectionResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class EditSprintMeetingSectionUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    formId,
    responses,
  }: EditSprintMeetingSectionUsecaseDto): Promise<EditSprintMeetingSectionResponseDto> {
    return await this.sprintMeetingApi.editSprintMeetingSection({
      meetingId,
      formId,
      responses,
    });
  }
}

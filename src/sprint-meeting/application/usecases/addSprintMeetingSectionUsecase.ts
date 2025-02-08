import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { AddSprintMeetingSectionUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { AddSprintMeetingSectionResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class AddSprintMeetingSectionUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    ...props
  }: AddSprintMeetingSectionUsecaseDto): Promise<AddSprintMeetingSectionResponseDto> {
    return await this.sprintMeetingApi.addSprintMeetingSection({
      ...props,
    });
  }
}

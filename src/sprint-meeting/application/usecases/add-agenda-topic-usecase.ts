import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprint-meeting-api-port";
import { AddAgendaTopicResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { AddAgendaTopicUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";

@injectable()
export class AddAgendaTopicUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    title,
    description,
  }: AddAgendaTopicUsecaseDto): Promise<AddAgendaTopicResponseDto> {
    return await this.sprintMeetingApi.addAgendaTopic({
      meetingId,
      title,
      description,
    });
  }
}

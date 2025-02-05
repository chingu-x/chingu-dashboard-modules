import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";

@injectable()
export class DeleteAgendaTopicUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    agendaId,
    title,
    description,
    status,
  }: DeleteAgendaTopicUsecase): Promise<DeleteAgendaTopicResponseDto> {
    return await this.sprintMeetingApi.editAgendaTopic({
      agendaId,
      title,
      description,
      status,
    });
  }
}

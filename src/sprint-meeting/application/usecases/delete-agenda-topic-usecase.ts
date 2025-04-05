import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprint-meeting-api-port";
import { DeleteAgendaTopicUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { DeleteAgendaTopicResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class DeleteAgendaTopicUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    agendaId,
  }: DeleteAgendaTopicUsecaseDto): Promise<DeleteAgendaTopicResponseDto> {
    return await this.sprintMeetingApi.deleteAgendaTopic({
      agendaId,
    });
  }
}

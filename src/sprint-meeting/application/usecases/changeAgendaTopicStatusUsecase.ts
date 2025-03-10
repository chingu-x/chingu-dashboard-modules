import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { ChangeAgendaTopicStatusUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { ChangeAgendaTopicStatusResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class ChangeAgendaTopicStatusUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    agendaId,
    status,
  }: ChangeAgendaTopicStatusUsecaseDto): Promise<ChangeAgendaTopicStatusResponseDto> {
    return await this.sprintMeetingApi.changeAgendaTopicStatus({
      agendaId,
      status,
    });
  }
}

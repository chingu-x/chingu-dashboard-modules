import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { EditAgendaTopicUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { EditAgendaTopicResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class EditAgendaTopicUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    agendaId,
    title,
    description,
  }: EditAgendaTopicUsecaseDto): Promise<EditAgendaTopicResponseDto> {
    return await this.sprintMeetingApi.editAgendaTopic({
      agendaId,
      title,
      description,
    });
  }
}

import { injectable } from "tsyringe";
import { GetAgendaByIdUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetAgendaByIdResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetAgendaByIdUsecase {
  execute({
    sprintMeeting,
    agendaId,
  }: GetAgendaByIdUsecaseDto): GetAgendaByIdResponseDto | undefined {
    return sprintMeeting.agendas?.find(
      (topic) => topic.id === Number(agendaId),
    );
  }
}

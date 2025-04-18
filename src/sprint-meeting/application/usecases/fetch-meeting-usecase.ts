import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprint-meeting-api-port";
import { FetchMeetingUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { FetchMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { orderAgenda } from "@/sprint-meeting/application/utils/order-agenda";

@injectable()
export class FetchMeetingUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute(
    props: FetchMeetingUsecaseDto,
  ): Promise<FetchMeetingResponseDto> {
    let data = await this.sprintMeetingApi.fetchMeeting({ ...props });

    if (Array.isArray(data.agendas) && data.agendas.length > 1) {
      data = orderAgenda(data);
    }

    return data;
  }
}

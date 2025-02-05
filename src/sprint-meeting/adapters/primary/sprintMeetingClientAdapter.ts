import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingClientPort } from "@/sprint-meeting/ports/primary/sprintMeetingClientPort";
import {
  AddAgendaTopicClientRequestDto,
  AddMeetingClientRequestDto,
  FetchMeetingClientRequestDto,
  GetSprintMeetingClientRequestDto,
  GetSprintMeetingIdClientRequesDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import {
  AddMeetingResponseDto,
  FetchMeetingResponseDto,
  GetSprintMeetingIdResponseDto,
  GetSprintMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingId";
import { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingUsecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";

@injectable()
export class SprintMeetingClientAdapter implements SprintMeetingClientPort {
  constructor(
    @inject(TYPES.FetchMeetingUsecase)
    private readonly fetchMeetingUsecase: FetchMeetingUsecase,

    @inject(TYPES.GetSprintMeetingIdUsecase)
    private readonly getSprintMeetingIdUsecase: GetSprintMeetingIdUsecase,

    @inject(TYPES.GetSprintMeetingUsecase)
    private readonly getSprintMeetingUsecase: GetSprintMeetingUsecase,

    @inject(TYPES.AddMeetingUsecase)
    private readonly addMeetingUsecase: AddMeetingUsecase,

    @inject(TYPES.AddAgendaTopicUsecase)
    private readonly addAgendaTopicUsecase: AddAgendaTopicUsecase,
  ) {}

  async fetchMeeting({
    meetingId,
  }: FetchMeetingClientRequestDto): Promise<FetchMeetingResponseDto> {
    return await this.fetchMeetingUsecase.execute({ meetingId });
  }

  getSprintMeetingId({
    meeting,
    sprintNumber,
  }: GetSprintMeetingIdClientRequesDto): GetSprintMeetingIdResponseDto {
    return this.getSprintMeetingIdUsecase.execute({
      meeting,
      sprintNumber,
    });
  }

  getSprintMeeting({
    meeting,
    meetingId,
  }: GetSprintMeetingClientRequestDto):
    | GetSprintMeetingResponseDto
    | undefined {
    return this.getSprintMeetingUsecase.execute({
      meeting,
      meetingId,
    });
  }

  async addMeeting({
    data,
    teamId,
    sprintNumber,
    timezone,
  }: AddMeetingClientRequestDto): Promise<AddMeetingResponseDto> {
    return await this.addMeetingUsecase.execute({
      data,
      teamId,
      sprintNumber,
      timezone,
    });
  }

  async addAgendaTopic({
    meetingId,
    sprintNumber,
    title,
    description,
  }: AddAgendaTopicClientRequestDto): AddAgendaTopicClientResponseDto {
    this.addAgendaTopicUsecase.execute({
      meetingId,
      sprintNumber,
      title,
      description,
    });
  }
}

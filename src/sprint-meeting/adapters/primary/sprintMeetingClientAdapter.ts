import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingClientPort } from "@/sprint-meeting/ports/primary/sprintMeetingClientPort";
import {
  AddAgendaTopicClientRequestDto,
  AddMeetingClientRequestDto,
  AddSprintMeetingSectionClientRequestDto,
  ChangeAgendaTopicStatusClientRequestDto,
  DeleteAgendaTopicClientRequestDto,
  EditAgendaTopicClientRequestDto,
  EditMeetingClientRequestDto,
  EditSprintMeetingSectionClientRequestDto,
  FetchMeetingClientRequestDto,
  GetSprintMeetingClientRequestDto,
  GetSprintMeetingIdClientRequesDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import {
  AddAgendaTopicResponseDto,
  AddMeetingResponseDto,
  AddSprintMeetingSectionResponseDto,
  ChangeAgendaTopicStatusResponseDto,
  DeleteAgendaTopicResponseDto,
  EditAgendaTopicResponseDto,
  EditMeetingResponseDto,
  EditSprintMeetingSectionResponseDto,
  FetchMeetingResponseDto,
  GetSprintMeetingIdResponseDto,
  GetSprintMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingId";
import { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingUsecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";
import { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/addAgendaTopicUsecase";
import { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/editAgendaTopicUsecase";
import { DeleteAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/deleteAgendaTopicUsecase";
import { EditMeetingUsecase } from "@/sprint-meeting/application/usecases/editMeetingUsecase";
import { ChangeAgendaTopicStatusUsecase } from "@/sprint-meeting/application/usecases/changeAgendaTopicStatusUsecase";
import { AddSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/addSprintMeetingSectionUsecase";
import { EditSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/editSprintMeetingSectionUsecase";

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

    @inject(TYPES.EditAgendaTopicUsecase)
    private readonly editAgendaTopicUsecase: EditAgendaTopicUsecase,

    @inject(TYPES.DeleteAgendaTopicUsecase)
    private readonly deleteAgendaTopicUsecase: DeleteAgendaTopicUsecase,

    @inject(TYPES.EditMeetingUsecase)
    private readonly editMeetingUsecase: EditMeetingUsecase,

    @inject(TYPES.ChangeAgendaTopicStatusUsecase)
    private readonly changeAgendaTopicStatusUsecase: ChangeAgendaTopicStatusUsecase,

    @inject(TYPES.AddSprintMeetingSectionUsecase)
    private readonly addSprintMeetingSectionUsecase: AddSprintMeetingSectionUsecase,

    @inject(TYPES.EditSprintMeetingSectionUsecase)
    private readonly editSprintMeetingSectionUsecase: EditSprintMeetingSectionUsecase,
  ) {}

  async fetchMeeting({
    meetingId,
  }: FetchMeetingClientRequestDto): Promise<FetchMeetingResponseDto> {
    return await this.fetchMeetingUsecase.execute({ meetingId });
  }

  getSprintMeetingId({
    sprints,
    sprintNumber,
  }: GetSprintMeetingIdClientRequesDto): GetSprintMeetingIdResponseDto {
    return this.getSprintMeetingIdUsecase.execute({
      sprints,
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

  async editMeeting({
    meetingId,
    timezone,
    ...data
  }: EditMeetingClientRequestDto): Promise<EditMeetingResponseDto> {
    return await this.editMeetingUsecase.execute({
      meetingId,
      timezone,
      ...data,
    });
  }

  async addAgendaTopic({
    meetingId,
    title,
    description,
  }: AddAgendaTopicClientRequestDto): Promise<AddAgendaTopicResponseDto> {
    return await this.addAgendaTopicUsecase.execute({
      meetingId,
      title,
      description,
    });
  }

  async editAgendaTopic({
    agendaId,
    title,
    description,
    status,
  }: EditAgendaTopicClientRequestDto): Promise<EditAgendaTopicResponseDto> {
    return await this.editAgendaTopicUsecase.execute({
      agendaId,
      title,
      description,
      status,
    });
  }

  async deleteAgendaTopic({
    agendaId,
  }: DeleteAgendaTopicClientRequestDto): Promise<DeleteAgendaTopicResponseDto> {
    return await this.deleteAgendaTopicUsecase.execute({ agendaId });
  }

  async changeAgendaTopicStatus({
    agendaId,
    status,
  }: ChangeAgendaTopicStatusClientRequestDto): Promise<ChangeAgendaTopicStatusResponseDto> {
    return await this.changeAgendaTopicStatusUsecase.execute({
      agendaId,
      status,
    });
  }

  async addSprintMeetingSection({
    meetingId,
    formId,
  }: AddSprintMeetingSectionClientRequestDto): Promise<AddSprintMeetingSectionResponseDto> {
    return await this.addSprintMeetingSectionUsecase.execute({
      meetingId,
      formId,
    });
  }

  async editSprintMeetingSection({
    meetingId,
    formId,
    responses,
  }: EditSprintMeetingSectionClientRequestDto): Promise<EditSprintMeetingSectionResponseDto> {
    return await this.editSprintMeetingSectionUsecase.execute({
      meetingId,
      formId,
      responses,
    });
  }
}

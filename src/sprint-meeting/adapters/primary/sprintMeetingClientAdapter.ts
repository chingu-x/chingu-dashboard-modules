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
  EditSprintPlanningSectionClientRequestDto,
  EditSprintReviewSectionClientRequestDto,
  FetchMeetingClientRequestDto,
  GetAgendaByIdClientRequestDto,
  GetIncompleteTopicsClientRequestDto,
  GetSprintMeetingClientRequestDto,
  GetSprintMeetingIdClientRequesDto,
  GetSprintPlanningQuestionsClientRequestDto,
  GetSprintReviewQuestionsClientRequestDto,
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
  GetAgendaByIdResponseDto,
  GetIncompleteTopicsResponseDto,
  GetSprintMeetingIdResponseDto,
  GetSprintMeetingResponseDto,
  GetSprintPlanningQuestionsResponseDto,
  GetSprintReviewQuestionsResponseDto,
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
import { GetAgendaByIdUsecase } from "@/sprint-meeting/application/usecases/getAgendaByIdUsecase";
import { GetSprintReviewQuestionsUsecase } from "@/sprint-meeting/application/usecases/getSprintReviewQuestionsUsecase";
import { EditSprintReviewSectionUsecase } from "@/sprint-meeting/application/usecases/editSprintReviewSectionUsecase";
import { GetSprintPlanningQuestionsUsecase } from "@/sprint-meeting/application/usecases/getSprintPlanningQuestionsUsecase";
import { EditSprintPlanningSectionUsecase } from "@/sprint-meeting/application/usecases/editSprintPlanningSectionUsecase";
import { GetIncompleteTopicsUsecase } from "@/sprint-meeting/application/usecases/getIncompleteTopicsUsecase";

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

    @inject(TYPES.GetSprintReviewQuestionsUsecase)
    private readonly getSprintReviewQuestionsUsecase: GetSprintReviewQuestionsUsecase,

    @inject(TYPES.GetSprintPlanningQuestionsUsecase)
    private readonly getSprintPlanningQuestionsUsecase: GetSprintPlanningQuestionsUsecase,

    @inject(TYPES.GetAgendaByIdUsecase)
    private readonly getAgendaByIdUsecase: GetAgendaByIdUsecase,

    @inject(TYPES.EditSprintReviewSectionUsecase)
    private readonly editSprintReviewSectionUsecase: EditSprintReviewSectionUsecase,

    @inject(TYPES.EditSprintPlanningSectionUsecase)
    private readonly editSprintPlanningSectionUsecase: EditSprintPlanningSectionUsecase,

    @inject(TYPES.GetIncompleteTopicsUsecase)
    private readonly getIncompleteTopicsUsecase: GetIncompleteTopicsUsecase,
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
  }: EditAgendaTopicClientRequestDto): Promise<EditAgendaTopicResponseDto> {
    return await this.editAgendaTopicUsecase.execute({
      agendaId,
      title,
      description,
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

  getAgendaById({
    meeting,
    meetingId,
    agendaId,
  }: GetAgendaByIdClientRequestDto): GetAgendaByIdResponseDto {
    const sprintMeeting = this.getSprintMeeting({ meeting, meetingId })!;

    return this.getAgendaByIdUsecase.execute({
      sprintMeeting,
      agendaId,
    });
  }

  getSprintReviewQuestions({
    meeting,
  }: GetSprintReviewQuestionsClientRequestDto): GetSprintReviewQuestionsResponseDto {
    return this.getSprintReviewQuestionsUsecase.execute({ meeting });
  }

  getSprintPlanningQuestions({
    meeting,
  }: GetSprintPlanningQuestionsClientRequestDto): GetSprintPlanningQuestionsResponseDto {
    return this.getSprintPlanningQuestionsUsecase.execute({ meeting });
  }

  async editSprintReviewSection({
    meetingId,
    data,
  }: EditSprintReviewSectionClientRequestDto): Promise<EditSprintMeetingSectionResponseDto> {
    return await this.editSprintReviewSectionUsecase.execute({
      meetingId,
      data,
    });
  }

  async editSprintPlanningSection({
    meetingId,
    data,
  }: EditSprintPlanningSectionClientRequestDto): Promise<EditSprintMeetingSectionResponseDto> {
    return await this.editSprintPlanningSectionUsecase.execute({
      meetingId,
      data,
    });
  }

  getIncompleteTopics({
    agendas,
  }: GetIncompleteTopicsClientRequestDto): GetIncompleteTopicsResponseDto {
    return this.getIncompleteTopicsUsecase.execute({ agendas });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingClientPort } from "@/sprint-meeting/ports/primary/sprint-meeting-client-port";
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
  FetchSprintMeetingFormClientRequestDto,
  GetSprintMeetingSectionResponsesClientRequestDto,
  GetAgendaByIdClientRequestDto,
  GetCompletedTopicsClientRequestDto,
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
  FetchSprintMeetingFormResponseDto,
  GetSprintMeetingSectionResponsesResponseDto,
  GetAgendaByIdResponseDto,
  GetCompletedTopicsResponseDto,
  GetIncompleteTopicsResponseDto,
  GetSprintMeetingIdResponseDto,
  GetSprintMeetingResponseDto,
  GetSprintPlanningQuestionsResponseDto,
  GetSprintReviewQuestionsResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetch-meeting-usecase";
import { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-id-usecase";
import { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-usecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/add-meeting-usecase";
import { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/add-agenda-topic-usecase";
import { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/edit-agenda-topic-usecase";
import { DeleteAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/delete-agenda-topic-usecase";
import { EditMeetingUsecase } from "@/sprint-meeting/application/usecases/edit-meeting-usecase";
import { ChangeAgendaTopicStatusUsecase } from "@/sprint-meeting/application/usecases/change-agenda-topic-status-usecase";
import { AddSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/add-sprint-meeting-section-usecase";
import { GetAgendaByIdUsecase } from "@/sprint-meeting/application/usecases/get-agenda-by-id-usecase";
import { GetSprintReviewQuestionsUsecase } from "@/sprint-meeting/application/usecases/get-sprint-review-questions-usecase";
import { EditSprintReviewSectionUsecase } from "@/sprint-meeting/application/usecases/edit-sprint-review-section-usecase";
import { GetSprintPlanningQuestionsUsecase } from "@/sprint-meeting/application/usecases/get-sprint-planning-questions-usecase";
import { EditSprintPlanningSectionUsecase } from "@/sprint-meeting/application/usecases/edit-sprint-planning-section-usecase";
import { GetIncompleteTopicsUsecase } from "@/sprint-meeting/application/usecases/get-incomplete-topics-usecase";
import { GetCompletedTopicsUsecase } from "@/sprint-meeting/application/usecases/get-completed-topics-usecase";
import { GetSprintMeetingSectionResponsesUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-section-responses-usecase";
import { FetchSprintMeetingFormUsecase } from "@/sprint-meeting/application/usecases/fetch-sprint-meeting-form-usecase";

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

    @inject(TYPES.GetCompletedTopicsUsecase)
    private readonly getCompletedTopicsUsecase: GetCompletedTopicsUsecase,

    @inject(TYPES.FetchSprintMeetingFormUsecase)
    private readonly fetchSprintMeetingFormUsecase: FetchSprintMeetingFormUsecase,

    @inject(TYPES.GetSprintMeetingSectionResponsesUsecase)
    private readonly getSprintMeetingSectionResponsesUsecase: GetSprintMeetingSectionResponsesUsecase,
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
  }: GetSprintMeetingClientRequestDto): GetSprintMeetingResponseDto {
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

  getCompletedTopics({
    agendas,
  }: GetCompletedTopicsClientRequestDto): GetCompletedTopicsResponseDto {
    return this.getCompletedTopicsUsecase.execute({ agendas });
  }

  async fetchSprintMeetingForm({
    meetingId,
    formId,
  }: FetchSprintMeetingFormClientRequestDto): Promise<FetchSprintMeetingFormResponseDto> {
    return await this.fetchSprintMeetingFormUsecase.execute({
      meetingId,
      formId,
    });
  }

  getSprintMeetingSectionResponses({
    sprintMeetingForm,
  }: GetSprintMeetingSectionResponsesClientRequestDto): GetSprintMeetingSectionResponsesResponseDto {
    return this.getSprintMeetingSectionResponsesUsecase.execute({
      sprintMeetingForm,
    });
  }
}

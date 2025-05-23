import type {
  AddAgendaTopicApiRequestDto,
  AddMeetingApiRequestDto,
  AddSprintMeetingSectionApiRequestDto,
  ChangeAgendaTopicStatusApiRequestDto,
  DeleteAgendaTopicApiRequestDto,
  EditAgendaTopicApiRequestDto,
  EditMeetingApiRequestDto,
  EditSprintMeetingSectionApiRequestDto,
  FetchMeetingApiRequestDto,
  FetchSprintMeetingFormApiRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
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
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingApiPort {
  fetchMeeting: ({
    meetingId,
  }: FetchMeetingApiRequestDto) => Promise<FetchMeetingResponseDto>;

  addMeeting: ({
    teamId,
    sprintNumber,
    title,
    description,
    dateTime,
    meetingLink,
  }: AddMeetingApiRequestDto) => Promise<AddMeetingResponseDto>;

  editMeeting: ({
    meetingId,
    title,
    description,
    dateTime,
    meetingLink,
    notes,
  }: EditMeetingApiRequestDto) => Promise<EditMeetingResponseDto>;

  addAgendaTopic: ({
    meetingId,
    title,
    description,
  }: AddAgendaTopicApiRequestDto) => Promise<AddAgendaTopicResponseDto>;

  editAgendaTopic: ({
    agendaId,
    title,
    description,
  }: EditAgendaTopicApiRequestDto) => Promise<EditAgendaTopicResponseDto>;

  deleteAgendaTopic: ({
    agendaId,
  }: DeleteAgendaTopicApiRequestDto) => Promise<DeleteAgendaTopicResponseDto>;

  changeAgendaTopicStatus: ({
    agendaId,
    status,
  }: ChangeAgendaTopicStatusApiRequestDto) => Promise<ChangeAgendaTopicStatusResponseDto>;

  addSprintMeetingSection: ({
    meetingId,
    formId,
  }: AddSprintMeetingSectionApiRequestDto) => Promise<AddSprintMeetingSectionResponseDto>;

  editSprintMeetingSection: ({
    meetingId,
    formId,
    responses,
  }: EditSprintMeetingSectionApiRequestDto) => Promise<EditSprintMeetingSectionResponseDto>;

  fetchSprintMeetingForm: ({
    meetingId,
    formId,
  }: FetchSprintMeetingFormApiRequestDto) => Promise<FetchSprintMeetingFormResponseDto>;
}

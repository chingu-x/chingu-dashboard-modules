import type {
  AddAgendaTopicApiRequestDto,
  AddMeetingApiRequestDto,
  EditAgendaTopicApiRequestDto,
  FetchMeetingApiRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  AddAgendaTopicResponseDto,
  AddMeetingResponseDto,
  EditAgendaTopicResponseDto,
  FetchMeetingResponseDto,
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

  addAgendaTopic: ({
    meetingId,
    title,
    description,
  }: AddAgendaTopicApiRequestDto) => Promise<AddAgendaTopicResponseDto>;

  editAgendaTopic: ({
    agendaId,
    title,
    description,
    status,
  }: EditAgendaTopicApiRequestDto) => Promise<EditAgendaTopicResponseDto>;

  deleteAgendaTopic: ({
    agendaId,
  }: DeleteAgendaTopicApiRequestDto) => Promise<DeleteAgendaTopicReponseDto>;
}

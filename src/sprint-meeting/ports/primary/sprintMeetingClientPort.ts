import type {
  AddMeetingClientRequestDto,
  FetchMeetingClientRequestDto,
  GetSprintMeetingIdClientRequesDto,
  GetSprintMeetingClientRequestDto,
  AddAgendaTopicClientRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  AddAgendaTopicResponseDto,
  AddMeetingResponseDto,
  FetchMeetingResponseDto,
  GetSprintMeetingIdResponseDto,
  GetSprintMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingClientPort {
  fetchMeeting: (
    props: FetchMeetingClientRequestDto,
  ) => Promise<FetchMeetingResponseDto>;

  getSprintMeetingId: (
    props: GetSprintMeetingIdClientRequesDto,
  ) => GetSprintMeetingIdResponseDto;

  getSprintMeeting: (
    props: GetSprintMeetingClientRequestDto,
  ) => GetSprintMeetingResponseDto | undefined;

  addMeeting: (
    props: AddMeetingClientRequestDto,
  ) => Promise<AddMeetingResponseDto>;

  addAgendaTopic: (
    props: AddAgendaTopicClientRequestDto,
  ) => Promise<AddAgendaTopicResponseDto>;

  editAgendaTopic: (
    props: EditAgendaTopicClientRequestDto
  ) => Promise<EditAgendaTopicResponseDto
}

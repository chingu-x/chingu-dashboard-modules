import type {
  AddMeetingClientRequestDto,
  FetchMeetingClientRequestDto,
  GetCurrentSprintMeetingIdClientRequesDto,
  GetCurrentSprintMeetingClientRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  AddMeetingResponseDto,
  FetchMeetingResponseDto,
  GetCurrentSprintMeetingIdResponseDto,
  GetCurrentSprintMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingClientPort {
  fetchMeeting: (
    props: FetchMeetingClientRequestDto,
  ) => Promise<FetchMeetingResponseDto>;

  getCurrentSprintMeetingId: (
    props: GetCurrentSprintMeetingIdClientRequesDto,
  ) => GetCurrentSprintMeetingIdResponseDto;

  getCurrentSprintMeeting: (
    props: GetCurrentSprintMeetingClientRequestDto,
  ) => GetCurrentSprintMeetingResponseDto | undefined;

  addMeeting: (
    props: AddMeetingClientRequestDto,
  ) => Promise<AddMeetingResponseDto>;
}

import type {
  FetchMeetingRequestDto,
  GetCurrentSprintMeetingIdRequesDto,
  GetCurrentSprintMeetingRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  FetchMeetingResponseDto,
  GetCurrentSprintMeetingIdResponseDto,
  GetCurrentSprintMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingClientPort {
  fetchMeeting: (
    props: FetchMeetingRequestDto,
  ) => Promise<FetchMeetingResponseDto>;

  getCurrentSprintMeetingId: (
    props: GetCurrentSprintMeetingIdRequesDto,
  ) => GetCurrentSprintMeetingIdResponseDto;

  getCurrentSprintMeeting: (
    props: GetCurrentSprintMeetingRequestDto,
  ) => GetCurrentSprintMeetingResponseDto | undefined;
}

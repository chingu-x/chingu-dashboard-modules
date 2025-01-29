import type {
  FetchMeetingRequestDto,
  GetCurrentSprintMeetingIdRequesDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  FetchMeetingResponseDto,
  GetCurrentSprintMeetingIdResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingClientPort {
  fetchMeeting: (
    props: FetchMeetingRequestDto
  ) => Promise<FetchMeetingResponseDto>;

  getCurrentSprintMeetingId: (
    props: GetCurrentSprintMeetingIdRequesDto
  ) => GetCurrentSprintMeetingIdResponseDto;
}

import type { FetchMeetingRequestDto } from "@/sprint-meeting/application/dtos/request.dto";
import type { FetchMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingApiPort {
  fetchMeeting: ({
    meetingId,
  }: FetchMeetingRequestDto) => Promise<FetchMeetingResponseDto>;
}

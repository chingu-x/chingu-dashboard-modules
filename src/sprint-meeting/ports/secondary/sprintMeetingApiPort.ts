import type {
  AddMeetingApiRequestDto,
  FetchMeetingRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  AddMeetingResponseDto,
  FetchMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingApiPort {
  fetchMeeting: ({
    meetingId,
  }: FetchMeetingRequestDto) => Promise<FetchMeetingResponseDto>;
  addMeeting: ({
    teamId,
    sprintNumber,
    title,
    description,
    dateTime,
    meetingLink,
  }: AddMeetingApiRequestDto) => Promise<AddMeetingResponseDto>;
}

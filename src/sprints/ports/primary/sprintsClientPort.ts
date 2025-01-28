import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintRequestDto,
  GetMeetingRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetMeetingResponseDto,
} from "@/sprints/application/dtos/response.dto";

export interface SprintsClientPort {
  fetchSprints: (
    props: FetchSprintsClientRequestDto,
  ) => Promise<FetchSprintsResponseDto>;
  getCurrentSprint: (
    props: GetCurrentSprintRequestDto,
  ) => GetCurrentSprintResponseDto | undefined;
  getMeeting: (props: GetMeetingRequestDto) => GetMeetingResponseDto | null;
}

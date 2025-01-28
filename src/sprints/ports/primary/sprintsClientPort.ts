import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintRequestDto,
  GetMeetingRequestDto,
  GetSprintCheckinStatusRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetMeetingResponseDto,
  GetSprintCheckinStatusResponseDto,
} from "@/sprints/application/dtos/response.dto";

export interface SprintsClientPort {
  fetchSprints: (
    props: FetchSprintsClientRequestDto
  ) => Promise<FetchSprintsResponseDto>;
  getCurrentSprint: (
    props: GetCurrentSprintRequestDto
  ) => GetCurrentSprintResponseDto | undefined;
  getMeeting: (props: GetMeetingRequestDto) => GetMeetingResponseDto | null;
  getSprintCheckinStatus: (
    props: GetSprintCheckinStatusRequestDto
  ) => GetSprintCheckinStatusResponseDto;
}

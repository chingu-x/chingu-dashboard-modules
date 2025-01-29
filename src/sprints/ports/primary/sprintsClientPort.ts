import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintRequestDto,
  GetMeetingRequestDto,
  GetSprintCheckinStatusRequestDto,
  IsCurrentSprintRequestDto,
  IsVoyageProjestSubmissionAllowedRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetMeetingResponseDto,
  GetSprintCheckinStatusResponseDto,
  IsCurrentSprintResponseDto,
  IsVoyageProjestSubmissionAllowedResponseDto,
} from "@/sprints/application/dtos/response.dto";

export interface SprintsClientPort {
  fetchSprints: (
    props: FetchSprintsClientRequestDto,
  ) => Promise<FetchSprintsResponseDto>;

  getCurrentSprint: (
    props: GetCurrentSprintRequestDto,
  ) => GetCurrentSprintResponseDto | undefined;

  getMeeting: (props: GetMeetingRequestDto) => GetMeetingResponseDto | null;

  getSprintCheckinStatus: (
    props: GetSprintCheckinStatusRequestDto,
  ) => GetSprintCheckinStatusResponseDto;

  isCurrentSprint: (
    props: IsCurrentSprintRequestDto,
  ) => IsCurrentSprintResponseDto;

  isVoyageProjestSubmissionAllowed: (
    props: IsVoyageProjestSubmissionAllowedRequestDto,
  ) => IsVoyageProjestSubmissionAllowedResponseDto;
}

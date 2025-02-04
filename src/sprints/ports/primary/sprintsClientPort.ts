import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintClientRequestDto,
  GetMeetingClientRequestDto,
  GetSprintCheckinStatusClientRequestDto,
  IsCurrentSprintClientRequestDto,
  IsVoyageProjestSubmissionAllowedClientRequestDto,
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
    props: GetCurrentSprintClientRequestDto,
  ) => GetCurrentSprintResponseDto | undefined;

  getMeeting: (
    props: GetMeetingClientRequestDto,
  ) => GetMeetingResponseDto | null;

  getSprintCheckinStatus: (
    props: GetSprintCheckinStatusClientRequestDto,
  ) => GetSprintCheckinStatusResponseDto;

  isCurrentSprint: (
    props: IsCurrentSprintClientRequestDto,
  ) => IsCurrentSprintResponseDto;

  isVoyageProjestSubmissionAllowed: (
    props: IsVoyageProjestSubmissionAllowedClientRequestDto,
  ) => IsVoyageProjestSubmissionAllowedResponseDto;

  // convertStringToDate: (
  //   props:
  // )
}

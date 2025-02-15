import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintClientRequestDto,
  GetSprintByNumberClientRequestDto,
  GetSprintCheckinStatusClientRequestDto,
  IsCurrentSprintClientRequestDto,
  IsVoyageProjestSubmissionAllowedClientRequestDto,
  SubmitVoyageProjectClientRequestDto,
  SubmitWeeklyCheckinClientRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
  GetSprintByNumberResponseDto,
  GetSprintCheckinStatusResponseDto,
  IsCurrentSprintResponseDto,
  IsVoyageProjestSubmissionAllowedResponseDto,
  SubmitVoyageProjectResponseDto,
  SubmitWeeklyCheckinResponseDto,
} from "@/sprints/application/dtos/response.dto";

export interface SprintsClientPort {
  fetchSprints: (
    props: FetchSprintsClientRequestDto,
  ) => Promise<FetchSprintsResponseDto>;

  getCurrentSprint: (
    props: GetCurrentSprintClientRequestDto,
  ) => GetCurrentSprintResponseDto | undefined;

  getSprintCheckinStatus: (
    props: GetSprintCheckinStatusClientRequestDto,
  ) => GetSprintCheckinStatusResponseDto;

  isCurrentSprint: (
    props: IsCurrentSprintClientRequestDto,
  ) => IsCurrentSprintResponseDto;

  isVoyageProjestSubmissionAllowed: (
    props: IsVoyageProjestSubmissionAllowedClientRequestDto,
  ) => IsVoyageProjestSubmissionAllowedResponseDto;

  submitWeeklyCheckin: (
    props: SubmitWeeklyCheckinClientRequestDto,
  ) => Promise<SubmitWeeklyCheckinResponseDto>;

  submitVoyageProject: (
    props: SubmitVoyageProjectClientRequestDto,
  ) => Promise<SubmitVoyageProjectResponseDto>;

  getSprintByNumber: (
    props: GetSprintByNumberClientRequestDto,
  ) => GetSprintByNumberResponseDto;
}

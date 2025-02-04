import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintClientRequestDto,
  GetMeetingClientRequestDto,
  GetSprintCheckinStatusClientRequestDto,
  IsCurrentSprintClientRequestDto,
  IsVoyageProjestSubmissionAllowedClientRequestDto,
} from "./request.dto";

export type FetchSprintsUsecaseDto = FetchSprintsClientRequestDto;

export type GetCurrentSprintUsecaseDto = GetCurrentSprintClientRequestDto;

export type GetMeetingUsecaseDto = GetMeetingClientRequestDto;

export type GetSprintCheckinStatusUsecaseDto =
  GetSprintCheckinStatusClientRequestDto;

export type IsCurrentSprintUsecaseDto = IsCurrentSprintClientRequestDto;

export type IsVoyageProjestSubmissionAllowedUsecaseDto =
  IsVoyageProjestSubmissionAllowedClientRequestDto;

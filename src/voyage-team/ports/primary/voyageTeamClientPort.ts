import { type FetchUserRequestDto } from "@/user/application/dtos/request.dtos";
import type {
  GetVoyageTeamIdResponseDto,
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  GetCurrentVoyageUserIdResponseDto,
  GetVoyageProjectSubmissionStatusResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { type HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";

export interface VoyageTeamClientPort {
  getCurrentVoyageTeam: (
    props: FetchUserRequestDto,
  ) => GetCurrentVoyageTeamResponseDto | undefined;

  getVoyageTeamId: (
    props: FetchUserRequestDto,
  ) => GetVoyageTeamIdResponseDto | undefined;

  getCurrentVoyageUserId: (
    props: FetchUserRequestDto,
  ) => GetCurrentVoyageUserIdResponseDto | undefined;

  hasVoyageStarted: (
    props: HasVoyageStartedRequestDto,
  ) => HasVoyageStartedResponseDto;

  getVoyageProjectSubmissionStatus: (
    props: FetchUserRequestDto,
  ) => GetVoyageProjectSubmissionStatusResponseDto | undefined;
}

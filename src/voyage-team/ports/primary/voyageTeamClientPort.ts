import { type FetchUserRequestDto } from "@/user/application/dtos/request.dto";
import type {
  GetVoyageTeamIdResponseDto,
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  GetCurrentVoyageUserIdResponseDto,
  GetVoyageProjectSubmissionStatusResponseDto,
  GetVoyageMemberRolesResponseDto,
  GetCurrentUserVoyageRoleResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import type {
  GetCurrentUserVoyageRoleClientRequestDto,
  GetVoyageMemberRolesRequestDto,
  HasVoyageStartedRequestDto,
} from "@/voyage-team/application/dtos/request.dto";

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

  getVoyageMemberRoles: (
    props: GetVoyageMemberRolesRequestDto,
  ) => GetVoyageMemberRolesResponseDto;

  getCurrentUserVoyageRole: (
    props: GetCurrentUserVoyageRoleClientRequestDto,
  ) => GetCurrentUserVoyageRoleResponseDto | undefined;
}

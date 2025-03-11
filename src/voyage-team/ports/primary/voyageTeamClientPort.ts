import type {
  GetCurrentVoyageTeamClientRequestDto,
  GetCurrentVoyageUserIdClientRequestDto,
  GetVoyageProjectSubmissionStatusClientRequestDto,
} from "@/voyage-team/application/dtos/request.dto";
import type {
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  GetCurrentVoyageUserIdResponseDto,
  GetVoyageProjectSubmissionStatusResponseDto,
  GetVoyageMemberRolesResponseDto,
  GetCurrentUserVoyageRoleResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import type {
  GetCurrentUserVoyageRoleClientRequestDto,
  GetVoyageMemberRolesClientRequestDto,
  HasVoyageStartedClientRequestDto,
} from "@/voyage-team/application/dtos/request.dto";

export interface VoyageTeamClientPort {
  getCurrentVoyageTeam: (
    props: GetCurrentVoyageTeamClientRequestDto,
  ) => GetCurrentVoyageTeamResponseDto;

  getCurrentVoyageUserId: (
    props: GetCurrentVoyageUserIdClientRequestDto,
  ) => GetCurrentVoyageUserIdResponseDto | undefined;

  hasVoyageStarted: (
    props: HasVoyageStartedClientRequestDto,
  ) => HasVoyageStartedResponseDto;

  getVoyageProjectSubmissionStatus: (
    props: GetVoyageProjectSubmissionStatusClientRequestDto,
  ) => GetVoyageProjectSubmissionStatusResponseDto | undefined;

  getVoyageMemberRoles: (
    props: GetVoyageMemberRolesClientRequestDto,
  ) => GetVoyageMemberRolesResponseDto;

  getCurrentUserVoyageRole: (
    props: GetCurrentUserVoyageRoleClientRequestDto,
  ) => GetCurrentUserVoyageRoleResponseDto | undefined;
}

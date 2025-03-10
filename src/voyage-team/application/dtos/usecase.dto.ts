import type {
  GetVoyageMemberRolesClientRequestDto,
  HasVoyageStartedClientRequestDto,
} from "./request.dto";
import type { GetVoyageTeamIdResponseDto } from "./response.dto";
import type { MyTeam } from "@/my-team/application/types";
import type { User } from "@/user/application/types";
import type { UserVoyageTeamMember } from "@/voyage-team/application/types";

export interface GetCurrentUserVoyageRoleUsecaseDto {
  voyageTeam: MyTeam;
  voyageMemberId: number | undefined;
}

export interface GetCurrentVoyageTeamUsecaseDto {
  user: User;
}

export interface GetCurrentVoyageUserIdUsecaseDto {
  userVoyageTeam: UserVoyageTeamMember;
}

export type GetVoyageMemberRolesUsecaseDto =
  GetVoyageMemberRolesClientRequestDto;

export interface GetVoyageProjectSubmissionStatusUsecaseDto {
  currentVoyageTeam: UserVoyageTeamMember;
}

export interface GetVoyageTeamIdUsecaseDto {
  userVoyageTeam: UserVoyageTeamMember;
}

export type HasVoyageStartedUsecaseDto = HasVoyageStartedClientRequestDto;

export interface IsCurrentVoyageTeamUsecaseDto {
  teamId: string;
  voyageTeamId: GetVoyageTeamIdResponseDto;
}

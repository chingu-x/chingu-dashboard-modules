import type { GetVoyageTeamIdResponseDto } from "./response.dto";
import type { UserVoyageTeamMember } from "@/voyage-team/application/types";
import type { User } from "@/user/application/types";
import type { MyTeam } from "@/my-team/application/types";

export type GetVoyageTeamIdRequestDto = UserVoyageTeamMember;
export type GetVoyageProjectSubmissionStatusRequestDto = UserVoyageTeamMember;
export interface HasVoyageStartedRequestDto {
  isAuthenticated: boolean;
  user: User;
}
export interface IsCurrentVoyageTeamClientRequestDto {
  user: User;
  teamId: string;
}

export interface IsCurrentVoyageTeamApiRequestDto {
  teamId: string;
  voyageTeamId: GetVoyageTeamIdResponseDto;
}

export interface GetVoyageMemberRolesRequestDto {
  voyageTeam: MyTeam;
}

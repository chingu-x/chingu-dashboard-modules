import type { User } from "@/user/application/types";
import type { MyTeam } from "@/my-team/application/types";
import type { VoyageSprint } from "@/sprints/application/types";
import type { UserVoyageTeamMember } from "@/voyage-team/application/types";

export interface GetCurrentVoyageTeamClientRequestDto {
  user: User;
  sprints: VoyageSprint[];
  currentDate: Date | string;
}

export interface GetCurrentVoyageUserIdClientRequestDto {
  currentVoyageTeam: UserVoyageTeamMember[];
  teamId: string;
}

export interface HasVoyageStartedClientRequestDto {
  isAuthenticated: boolean;
  user: User;
}

export interface GetVoyageProjectSubmissionStatusClientRequestDto {
  currentVoyageTeam: UserVoyageTeamMember[];
  teamId: string;
}

export interface GetVoyageMemberRolesClientRequestDto {
  voyageTeam: MyTeam;
}

export interface IsCurrentVoyageTeamClientRequestDto {
  currentVoyageTeam: UserVoyageTeamMember[];
  teamId: string;
}

export interface GetCurrentUserVoyageRoleClientRequestDto {
  user: User;
  voyageTeam: MyTeam;
}

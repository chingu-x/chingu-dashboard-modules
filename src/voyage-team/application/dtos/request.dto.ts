import type { User } from "@/user/application/types";
import type { MyTeam } from "@/my-team/application/types";
import type { VoyageSprint } from "@/sprints/application/types";

export interface GetCurrentVoyageTeamClientRequestDto {
  user: User;
  sprints: VoyageSprint[];
}

export interface GetVoyageTeamIdClientRequestDto {
  user: User;
}

export interface GetCurrentVoyageUserIdClientRequestDto {
  user: User;
}

export interface HasVoyageStartedClientRequestDto {
  isAuthenticated: boolean;
  user: User;
}

export interface GetVoyageProjectSubmissionStatusClientRequestDto {
  user: User;
}

export interface GetVoyageMemberRolesClientRequestDto {
  voyageTeam: MyTeam;
}

export interface IsCurrentVoyageTeamClientRequestDto {
  user: User;
  teamId: string;
}

export interface GetCurrentUserVoyageRoleClientRequestDto {
  user: User;
  voyageTeam: MyTeam;
}

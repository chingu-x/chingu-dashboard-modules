import type {
  GetVoyageMemberRolesClientRequestDto,
  HasVoyageStartedClientRequestDto,
} from "./request.dto";
import type { MyTeam } from "@/my-team/application/types";
import type { VoyageSprint } from "@/sprints/application/types";
import type { User } from "@/user/application/types";
import type { UserVoyageTeamMember } from "@/voyage-team/application/types";

export interface GetCurrentUserVoyageRoleUsecaseDto {
  voyageTeam: MyTeam;
  voyageMemberId: number | undefined;
}

export interface GetCurrentVoyageTeamUsecaseDto {
  user: User;
  sprints: VoyageSprint[];
  currentDate: Date | string;
}

export interface GetCurrentVoyageUserIdUsecaseDto {
  currentVoyageTeam: UserVoyageTeamMember[];
  teamId: string;
}

export type GetVoyageMemberRolesUsecaseDto =
  GetVoyageMemberRolesClientRequestDto;

export interface GetVoyageProjectSubmissionStatusUsecaseDto {
  currentVoyageTeam: UserVoyageTeamMember[];
  teamId: string;
}

export type HasVoyageStartedUsecaseDto = HasVoyageStartedClientRequestDto;

export interface IsCurrentVoyageTeamUsecaseDto {
  teamId: string;
  currentVoyageTeam: UserVoyageTeamMember[];
}

import type { GetUserVoyageTeamIdResponseDto } from "./response.dto";
import { type UserVoyageTeamMember } from "@/voyage-team/application/types";
import { type User } from "@/user/application/types";

export type GetUserVoyageTeamIdRequestDto = UserVoyageTeamMember;
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
  voyageTeamId: GetUserVoyageTeamIdResponseDto;
}

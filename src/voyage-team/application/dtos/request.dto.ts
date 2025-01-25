import { type UserVoyageTeamMember } from "@/voyage-team/application/types";
import { type User } from "@/user/application/types";

export type GetUserVoyageTeamIdRequestDto = UserVoyageTeamMember;
export interface HasVoyageStartedRequestDto {
  isAuthenticated: boolean;
  user: User;
}

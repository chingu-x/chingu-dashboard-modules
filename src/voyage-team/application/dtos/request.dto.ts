import { type VoyageTeamMember } from "./response.dto";
import { type User } from "@/user/application/types";

export type GetCurrentVoyageTeamIdRequestDto = VoyageTeamMember;
export interface HasVoyageStartedRequestDto {
  isAuthenticated: boolean;
  user: User;
}

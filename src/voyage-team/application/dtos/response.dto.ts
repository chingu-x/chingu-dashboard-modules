import { type UserVoyageTeamMember } from "@/voyage-team/application/types";

export type GetCurrentVoyageTeamResponseDto = UserVoyageTeamMember;
export type GetVoyageTeamIdResponseDto = string | undefined;
export type GetCurrentVoyageUserIdResponseDto = number | undefined;
export type HasVoyageStartedResponseDto = boolean;
export type IsCurrentVoyageTeamResponseDto = boolean;

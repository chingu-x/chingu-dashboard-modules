import { type UserVoyageTeamMember } from "@/voyage-team/application/types";

export type GetUserVoyageTeamResponseDto = UserVoyageTeamMember;
export type GetVoyageTeamIdResponseDto = string | undefined;
export type HasVoyageStartedResponseDto = boolean;
export type IsCurrentVoyageTeamResponseDto = boolean;

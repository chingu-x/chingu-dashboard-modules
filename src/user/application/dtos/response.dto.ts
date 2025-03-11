import { type User } from "@/user/application/types";
import type { UserVoyageTeamMember } from "@/voyage-team/application/types";

export type FetchUserResponseDto = User;

export type GetChinguMemberStatusResponseDto = boolean;

export type GetActiveTeamsResponseDto = UserVoyageTeamMember[];

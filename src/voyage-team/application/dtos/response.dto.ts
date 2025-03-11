import { type UserVoyageTeamMember } from "@/voyage-team/application/types";

export type GetCurrentVoyageTeamResponseDto = UserVoyageTeamMember[];
export type GetVoyageTeamIdResponseDto = string;
export type GetCurrentVoyageUserIdResponseDto = number;
export type HasVoyageStartedResponseDto = boolean;
export type IsCurrentVoyageTeamResponseDto = boolean;
export type GetVoyageProjectSubmissionStatusResponseDto = boolean;
export interface GetVoyageMemberRolesResponseDto {
  hasScrumMaster: boolean;
  hasProductOwner: boolean;
}
export interface GetCurrentUserVoyageRoleResponseDto {
  isScrumMaster: boolean;
  isProductOwner: boolean;
}

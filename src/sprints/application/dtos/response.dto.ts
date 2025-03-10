import type { Sprint, VoyageSprint } from "@/sprints/application/types";

export type FetchSprintsResponseDto = VoyageSprint;
export type GetCurrentSprintResponseDto = Sprint;
export type GetSprintCheckinStatusResponseDto = boolean;
export type IsCurrentSprintResponseDto = boolean;
export type IsVoyageProjestSubmissionAllowedResponseDto = boolean;

export interface SubmitWeeklyCheckinResponseDto {
  createdAt: string;
  id: number;
  responseGroupId: number;
  sprintId: number;
  voyageTeamMemberId: number;
}

export interface SubmitVoyageProjectResponseDto {
  createdAt: string;
  id: number;
  responseGroupId: number;
  voyageTeamMemberId: number;
}

export type GetSprintByNumberResponseDto = Sprint;

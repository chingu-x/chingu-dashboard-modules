import type { Sprint } from "@/sprints/application/types";
import type { User } from "@/user/application/types";

export interface FetchSprintsClientRequestDto {
  teamId: string;
}

export interface FetchSprintsApiRequestDto {
  teamId: string;
}

export interface GetCurrentSprintClientRequestDto {
  sprints: Sprint[];
  currentDate: Date;
}

export interface GetMeetingClientRequestDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetSprintCheckinStatusClientRequestDto {
  user: User;
  sprintId: number;
}

export interface IsCurrentSprintClientRequestDto {
  sprintNumber: string;
  currentSprintNumber: number;
}

export interface IsVoyageProjestSubmissionAllowedClientRequestDto {
  sprintNumber: string;
}

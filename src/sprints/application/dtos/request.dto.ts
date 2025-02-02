import type { ConvertStringToDateProps } from "@/sprints/application/utils/convertStringToDate";
import type { Sprint } from "@/sprints/application/types";
import type { User } from "@/user/application/types";

export interface FetchSprintsClientRequestDto {
  teamId: string;
}

export interface FetchSprintsApiRequestDto {
  teamId: number;
}

export interface GetCurrentSprintRequestDto {
  sprints: Sprint[];
  currentDate: Date;
}

export interface GetMeetingRequestDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetSprintCheckinStatusRequestDto {
  user: User;
  sprintId: number;
}

export interface IsCurrentSprintRequestDto {
  sprintNumber: string;
  currentSprintNumber: number;
}

export interface IsVoyageProjestSubmissionAllowedRequestDto {
  sprintNumber: string;
}

export type ConvertStringToDateRequestDto = ConvertStringToDateProps;

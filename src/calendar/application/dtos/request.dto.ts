import type { Sprint } from "@/sprints/application/types";

// client
export interface GetVoyageStartDateClientRequestDto {
  sprintsData: Sprint[];
}

export interface GetVoyageEndDateClientRequestDto {
  sprintsData: Sprint[];
}

export interface IsWithinSprintRangeClientRequestDto {
  currentDate: Date;
  startDate: string;
  endDate: string;
  timezone: string;
}

export interface GetSelectedSprintClientRequestDto {
  sprints: Sprint[];
}

// api

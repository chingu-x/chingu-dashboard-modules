import type { Sprint } from "@/sprints/application/types";

// client
export interface GetVoyageStartDateClientRequestDto {
  sprintsData: Sprint[];
}

export interface GetVoyageEndDateClientRequestDto {
  sprintsData: Sprint[];
}

export interface IsWithinTwoDatesClientRequestDto {
  currentDate: Date | string;
  startDate: Date | string;
  endDate: Date | string;
}

// api

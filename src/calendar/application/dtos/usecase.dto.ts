import type { Sprint } from "@/sprints/application/types";

export interface GetVoyageStartDateUsecaseDto {
  sprintsData: Sprint[];
}

export interface GetVoyageEndDateUsecaseDto {
  sprintsData: Sprint[];
}

export interface IsWithinSprintRangeUsecaseDto {
  currentDate: Date;
  startDate: string;
  endDate: string;
  timezone: string;
}

export interface GetSelectedSprintUsecaseDto {
  sprints: Sprint[];
}

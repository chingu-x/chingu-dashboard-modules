import type { Sprint } from "@/sprints/application/types";

export interface GetVoyageStartDateUsecaseDto {
  sprintsData: Sprint[];
}

export interface GetVoyageEndDateUsecaseDto {
  sprintsData: Sprint[];
}

export interface IsWithinSprintRangeUsecaseDto {
  currentDate: Date | string;
}

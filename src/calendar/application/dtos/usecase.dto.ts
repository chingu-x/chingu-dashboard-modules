import type { Sprint } from "@/sprints/application/types";

export interface GetVoyageStartDateUsecaseDto {
  sprintsData: Sprint[];
}

export interface GetVoyageEndDateUsecaseDto {
  sprintsData: Sprint[];
}

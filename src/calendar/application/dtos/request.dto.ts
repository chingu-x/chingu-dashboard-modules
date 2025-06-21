import type { Sprint } from "@/sprints/application/types";

// client
export interface GetVoyageStartDateClientRequestDto {
  sprintsData: Sprint[];
}

export interface GetVoyageEndDateClientRequestDto {
  sprintsData: Sprint[];
}

// api

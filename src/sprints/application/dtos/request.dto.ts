import type { Sprint } from "@/sprints/application/types";

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

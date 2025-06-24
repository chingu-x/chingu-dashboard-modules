import type { Sprint } from "@/sprints/application/types";
import { IsWithinSprintRangeResponseDto } from "./response.dto";

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
  selectedDate: Date;
  startDate: string;
  endDate: string;
  timezone: string;
  isWithinTwoDates: (
    props: IsWithinSprintRangeUsecaseDto,
  ) => IsWithinSprintRangeResponseDto;
}

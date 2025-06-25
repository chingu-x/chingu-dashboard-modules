import type { Event } from "@/calendar/application/types";
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
  selectedDate: Date;
  timezone: string;
}

export interface GetMeetingEventDataClientRequestDto {
  data: Event[];
  date: Date;
  timezone: string;
}

// api

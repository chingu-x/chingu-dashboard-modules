import type { Sprint } from "@/sprints/application/types/index";
import type { VoyageResource } from "@/voyage-resources";

// client
export interface GetMeetingLongDateTimeFormatClientRequestDto {
  meetingDateTime: string;
  timezone: string;
}

export interface GetMeetingDateClientRequestDto {
  dateTime: string;
  timezone: string;
}

export interface GetMeetingTimeWithTZAbbreviationClientRequestDto {
  dateTime: string;
  timezone: string;
}

export interface GetSprintStartDateBySprintNumberClientRequestDto {
  sprints: Sprint[];
  sprintNumber: string;
  timezone: string;
}

export interface GetSprintEndDateBySprintNumberClientRequestDto {
  sprints: Sprint[];
  sprintNumber: string;
  timezone: string;
}

export interface GetVoyageResourceDateClientRequestDto {
  voyageResources: VoyageResource[];
  timezone: string;
}

// api

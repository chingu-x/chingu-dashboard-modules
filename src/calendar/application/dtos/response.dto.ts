import type { Meeting } from "@/sprint-meeting/application/types";

export type GetVoyageStartDateResponseDto = string | undefined;

export type GetVoyageEndDateResponseDto = string | undefined;

export type IsWithinSprintRangeResponseDto = boolean;

export type GetSelectedSprintResponseDto = number | undefined;

export type GetMeetingEventDataResponseDto = Meeting;

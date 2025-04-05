import type { VoyageResource } from "@/voyage-resources";

export type UpdateDirectoryWithCurrentTimeResponseDto = void;

export type GetMeetingLongDateTimeFormatResponseDto = Date;

export type GetMeetingDateResponseDto = string;

export type GetMeetingTimeWithTZAbbreviationResponseDto = string;

export type GetSprintStartDateBySprintNumberResponseDto = Date;

export type GetSprintEndDateBySprintNumberResponseDto = Date;

export type GetVoyageResourceDateResponseDto = VoyageResource[];

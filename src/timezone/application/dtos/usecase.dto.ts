import type { MyTeam } from "@/my-team/application/types";
import type { Sprint } from "@/sprints/application/types";

export interface UpdateDirectoryWithCurrentTimeUsecaseRequestDto {
  data: MyTeam;
}

export interface GetMeetingLongDateTimeFormatUsecaseDto {
  meetingDateTime: string;
  timezone: string;
}

export interface GetMeetingDateUsecaseDto {
  dateTime: string;
  timezone: string;
}

export interface GetMeetingTimeWithTZAbbreviationUsecaseDto {
  dateTime: string;
  timezone: string;
}

export interface GetSprintStartDateBySprintNumberUsecaseDto {
  sprint: Sprint;
  timezone: string;
}

export interface GetSprintEndDateBySprintNumberUsecaseDto {
  sprint: Sprint;
  timezone: string;
}

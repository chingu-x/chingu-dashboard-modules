import type { Sprint } from "@/sprints/application/types";
import type {
  Meeting,
  MeetingFormData,
} from "@/sprint-meeting/application/types";

export interface FetchMeetingClientRequestDto {
  meetingId: number;
}

export interface GetCurrentSprintMeetingIdClientRequesDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetCurrentSprintMeetingClientRequestDto {
  meeting: Meeting[];
  meetingId: string;
}

export interface AddMeetingClientRequestDto {
  data: MeetingFormData;
  teamId: string;
  sprintNumber: string;
  timezone: string;
}

export type FetchMeetingApiRequestDto = FetchMeetingClientRequestDto;

export interface AddMeetingApiRequestDto {
  teamId: string;
  sprintNumber: string;
  title: string;
  description: string;
  dateTime: string;
  meetingLink?: string;
}

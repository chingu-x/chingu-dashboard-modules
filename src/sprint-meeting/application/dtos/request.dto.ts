import type { Sprint } from "@/sprints/application/types";
import type { MeetingFormData } from "@/sprint-meeting/application/types";

export interface FetchMeetingRequestDto {
  meetingId: number;
}

export interface GetCurrentSprintMeetingIdRequesDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetCurrentSprintMeetingRequestDto {
  sprints: Sprint[];
  meetingId: string;
}

export interface AddMeetingClientRequestDto {
  data: MeetingFormData;
  teamId: string;
  sprintNumber: string;
  timezone: string;
}

export interface AddMeetingApiRequestDto {
  teamId: string;
  sprintNumber: string;
  title: string;
  description: string;
  dateTime: string;
  meetingLink?: string;
}

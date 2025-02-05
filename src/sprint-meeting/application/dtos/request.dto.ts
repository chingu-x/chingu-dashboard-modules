import type {
  Meeting,
  MeetingFormData,
} from "@/sprint-meeting/application/types";

// client
export interface FetchMeetingClientRequestDto {
  meetingId: number;
}

export interface GetSprintMeetingIdClientRequesDto {
  meeting: Meeting[];
  sprintNumber: number;
}

export interface GetSprintMeetingClientRequestDto {
  meeting: Meeting[];
  meetingId: string;
}

export interface AddMeetingClientRequestDto {
  data: MeetingFormData;
  teamId: string;
  sprintNumber: string;
  timezone: string;
}

// api
export interface FetchMeetingApiRequestDto {
  meetingId: number;
}

export interface AddMeetingApiRequestDto {
  teamId: string;
  sprintNumber: string;
  title: string;
  description: string;
  dateTime: string;
  meetingLink?: string;
}

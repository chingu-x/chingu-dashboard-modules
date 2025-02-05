import type {
  Meeting,
  MeetingFormData,
} from "@/sprint-meeting/application/types";

export interface AddMeetingUsecaseDto {
  data: MeetingFormData;
  teamId: string;
  sprintNumber: string;
  timezone: string;
}

export interface FetchMeetingUsecaseDto {
  meetingId: number;
}

export interface GetSprintMeetingIdUsecaseDto {
  meeting: Meeting[];
  sprintNumber: number;
}

export interface GetSprintMeetingUsecaseDto {
  meeting: Meeting[];
  meetingId: string;
}

export interface AddAgendaTopicUsecaseDto {
  meetingId: string;
  title: string;
  description: string;
}

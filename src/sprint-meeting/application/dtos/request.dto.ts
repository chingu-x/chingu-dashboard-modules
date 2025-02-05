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

export interface AddAgendaTopicClientRequestDto {
  meetingId: string;
  title: string;
  description: string;
}

export interface EditAgendaTopicClientRequestDto {
  agendaId: string;
  title: string;
  description: string;
  status: boolean;
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

export interface AddAgendaTopicApiRequestDto {
  meetingId: string;
  title: string;
  description: string;
}

export interface EditAgendaTopicApiRequestDto {
  agendaId: string;
  title: string;
  description: string;
  status: boolean;
}

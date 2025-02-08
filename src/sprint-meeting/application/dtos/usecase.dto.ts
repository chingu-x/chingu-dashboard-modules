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

export interface EditMeetingUsecaseDto {
  meetingId: string;
  title?: string;
  description?: string;
  dateTime?: Date;
  meetingLink?: string;
  notes?: string;
}

export interface FetchMeetingUsecaseDto {
  meetingId: string;
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

export interface EditAgendaTopicUsecaseDto {
  agendaId: string;
  title: string;
  description: string;
  status: boolean;
}

export interface DeleteAgendaTopicUsecaseDto {
  agendaId: string;
}

export interface ChangeAgendaTopicStatusUsecaseDto {
  agendaId: string;
  status: boolean;
}

export interface AddSprintMeetingSectionUsecaseDto {
  meetingId: string;
  formId: number;
}

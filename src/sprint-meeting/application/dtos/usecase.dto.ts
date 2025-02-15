import type { FormResponses } from "@/forms/application/types";
import type {
  Meeting,
  MeetingFormData,
} from "@/sprint-meeting/application/types";
import type { Sprint } from "@/sprints/application/types";

export interface AddMeetingUsecaseDto {
  data: MeetingFormData;
  teamId: string;
  sprintNumber: string;
  timezone: string;
}

export interface EditMeetingUsecaseDto {
  meetingId: string;
  timezone?: string;
  title?: string;
  description?: string;
  dateTime?: string | Date;
  meetingLink?: string;
  notes?: string;
}

export interface FetchMeetingUsecaseDto {
  meetingId: string;
}

export interface GetSprintMeetingIdUsecaseDto {
  sprints: Sprint[];
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

export interface EditSprintMeetingSectionUsecaseDto {
  meetingId: string;
  formId: number;
  responses: FormResponses;
}

export interface GetAgendaByIdUsecaseDto {
  sprintMeeting: Meeting;
  agendaId: string;
}

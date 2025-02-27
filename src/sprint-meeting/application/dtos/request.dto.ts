import type { FormResponses } from "@/forms/application/types";
import type {
  Meeting,
  MeetingFormData,
  SectionBody,
} from "@/sprint-meeting/application/types";
import type { Sprint } from "@/sprints/application/types";

// client
export interface FetchMeetingClientRequestDto {
  meetingId: string;
}

export interface GetSprintMeetingIdClientRequesDto {
  sprints: Sprint[];
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

export interface EditMeetingClientRequestDto {
  meetingId: string;
  timezone?: string;
  title?: string;
  description?: string;
  dateTime?: string | Date;
  meetingLink?: string;
  notes?: string;
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
}

export interface DeleteAgendaTopicClientRequestDto {
  agendaId: string;
}

export interface ChangeAgendaTopicStatusClientRequestDto {
  agendaId: string;
  status: boolean;
}

export interface AddSprintMeetingSectionClientRequestDto {
  meetingId: string;
  formId: number;
}

export interface GetSprintReviewQuestionsClientRequestDto {
  meeting: Meeting;
}

export interface EditSprintReviewSectionClientRequestDto {
  meetingId: string;
  formId: number;
  data: SectionBody;
}

export interface GetAgendaByIdClientRequestDto {
  meeting: Meeting[];
  meetingId: string;
  agendaId: string;
}

// api
export interface FetchMeetingApiRequestDto {
  meetingId: string;
}

export interface AddMeetingApiRequestDto {
  teamId: string;
  sprintNumber: string;
  title: string;
  description: string;
  dateTime: string;
  meetingLink?: string;
}

export interface EditMeetingApiRequestDto {
  meetingId: string;
  title?: string;
  description?: string;
  dateTime?: string | Date;
  meetingLink?: string;
  notes?: string;
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
}

export interface DeleteAgendaTopicApiRequestDto {
  agendaId: string;
}

export interface ChangeAgendaTopicStatusApiRequestDto {
  agendaId: string;
  status: boolean;
}

export interface AddSprintMeetingSectionApiRequestDto {
  meetingId: string;
  formId: number;
}

export interface EditSprintMeetingSectionApiRequestDto {
  meetingId: string;
  formId: number;
  responses: FormResponses;
}

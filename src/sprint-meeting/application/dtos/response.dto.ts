import type {
  Agenda,
  Meeting,
  Section,
} from "@/sprint-meeting/application/types";

export type FetchMeetingResponseDto = Meeting;
export type GetSprintMeetingIdResponseDto = number | undefined;
export type GetSprintMeetingResponseDto = Meeting;

export interface AddMeetingResponseDto {
  id: number;
  sprintId: number;
  voyageTeamId: string;
  title: string;
  description: string;
  dateTime: string;
  meetingLink?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EditMeetingResponseDto {
  id: number;
  sprintId: number;
  voyageTeamId: number;
  title: string;
  description: string;
  dateTime: string;
  meetingLink: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddAgendaTopicResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EditAgendaTopicResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteAgendaTopicResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChangeAgendaTopicStatusResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AddSprintMeetingSectionResponseDto {
  id: number;
  formId: number;
  meetingId: number;
  responseGroupId: number;
  createdAt: string;
  updatedAt: string;
}

export interface EditSprintMeetingSectionResponseDto {
  id: number;
  questionId: number;
  optionChoiceId: number;
  numeric: number;
  boolean: boolean;
  text: string;
  responseGroupId: number;
  createdAt: string;
  updatedAt: string;
}

export type GetAgendaByIdResponseDto = Agenda;

export type GetSprintReviewQuestionsResponseDto = Section;

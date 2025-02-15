import type { FormResponses } from "@/forms/application/types";
import type {
  Meeting,
  MeetingFormData,
  SprintReviewQuestions,
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
  status: boolean;
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

// export interface EditSprintMeetingSectionClientRequestDto {
//   meetingId: string;
//   formId: number;
//   responses: FormResponses;
// }

export interface EditSprintReviewSectionClientRequestDto {
  data: SprintReviewQuestions;
}

export interface GetAgendaByIdClientRequestDto {
  sprints: Sprint[];
  sprintNumber: string;
  meeting: Meeting[];
  meetingId: string;
  agendaId: number;
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
  status: boolean;
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

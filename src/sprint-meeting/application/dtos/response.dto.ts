import type { Meeting } from "@/sprint-meeting/application/types";

export type FetchMeetingResponseDto = Meeting;
export type GetSprintMeetingIdResponseDto = number | undefined;
export type GetSprintMeetingResponseDto = Meeting;

export interface AddMeetingResponseDto {
  createdAt: string;
  dateTime: string;
  description: string;
  id: number;
  meetingLink?: string;
  notes?: string;
  sprintId: number;
  title: string;
  updatedAt: string;
  voyageTeamId: string;
}

export interface AddAgendaTopicResponseDto {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export interface EditAgendaTopicResponseDto {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

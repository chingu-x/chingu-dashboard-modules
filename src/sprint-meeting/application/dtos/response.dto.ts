import type { Meeting } from "@/sprint-meeting/application/types";

export type FetchMeetingResponseDto = Meeting;
export type GetCurrentSprintMeetingIdResponseDto = number;
export type GetCurrentSprintMeetingResponseDto = Meeting;

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

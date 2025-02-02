import type { Meeting } from "@/sprint-meeting/application/types";

export type FetchMeetingResponseDto = Meeting;
export type GetCurrentSprintMeetingIdResponseDto = number;
export type GetCurrentSprintMeetingResponseDto = Meeting;

export interface AddMeetingResponseDto {
  id: number;
  title: string;
  description: string;
  dateTime: string;
  meetingLink: string;
  notes: string;
}

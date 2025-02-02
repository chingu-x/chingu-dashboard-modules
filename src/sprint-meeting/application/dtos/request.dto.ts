import type { Sprint } from "@/sprints/application/types";

export interface FetchMeetingRequestDto {
  meetingId: number;
}

export interface GetCurrentSprintMeetingIdRequesDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetCurrentSprintMeetingRequestDto {
  sprints: Sprint[];
  meetingId: string;
}

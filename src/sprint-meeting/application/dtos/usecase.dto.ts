import type { Sprint } from "@/sprints/application/types";
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

export interface FetchMeetingUsecaseDto {
  meetingId: number;
}

export interface GetCurrentSprintMeetingIdUsecaseDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetCurrentSprintMeetingUsecaseDto {
  meeting: Meeting[];
  meetingId: string;
}

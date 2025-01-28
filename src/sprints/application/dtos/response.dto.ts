import type {
  Meeting,
  Sprint,
  VoyageSprint,
} from "@/sprints/application/types";

export type FetchSprintsResponseDto = VoyageSprint;
export type GetCurrentSprintResponseDto = Sprint;
export type GetMeetingResponseDto = Meeting;

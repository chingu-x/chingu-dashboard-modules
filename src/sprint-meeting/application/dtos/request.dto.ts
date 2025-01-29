import type { VoyageSprint } from "@/sprints/application/types";

export interface FetchMeetingRequestDto {
  meetingId: number;
}

export interface GetCurrentSprintMeetingRequesDto {
  sprints: VoyageSprint;
}

import type { Meeting } from "@/sprint-meeting/application/types";
import type { Sprint, VoyageSprint } from "@/sprints/application/types";

export type FetchSprintsResponseDto = VoyageSprint;
export type GetCurrentSprintResponseDto = Sprint;
export type GetMeetingResponseDto = Meeting;
export type GetSprintCheckinStatusResponseDto = boolean;
export type IsCurrentSprintResponseDto = boolean;
export type IsVoyageProjestSubmissionAllowedResponseDto = boolean;
export type ConvertStringToDateResponseDto = Date;

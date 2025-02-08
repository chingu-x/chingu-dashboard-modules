import type { User } from "@/user/application/types";
import type { Sprint } from "@/sprints/application/types";
import type {
  CreateFormResponseBody,
  Question,
} from "@/forms/application/types";

export interface FetchSprintsUsecaseDto {
  teamId: string;
}

export interface GetCurrentSprintUsecaseDto {
  sprints: Sprint[];
  currentDate: Date;
}

export interface GetMeetingUsecaseDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetSprintCheckinStatusUsecaseDto {
  user: User;
  sprintId: number;
}

export interface IsCurrentSprintUsecaseDto {
  sprintNumber: string;
  currentSprintNumber: number;
}

export interface IsVoyageProjestSubmissionAllowedUsecaseDto {
  sprintNumber: string;
}

export interface SubmitWeeklyCheckinUsecaseDto {
  voyageTeamMemberId: number;
  sprintId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

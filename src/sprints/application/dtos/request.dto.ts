import type {
  CreateFormResponseBody,
  FormResponses,
  Question,
} from "@/forms/application/types";
import type { Sprint } from "@/sprints/application/types";
import type { User } from "@/user/application/types";

// client
export interface FetchSprintsClientRequestDto {
  teamId: string;
}

export interface GetCurrentSprintClientRequestDto {
  sprints: Sprint[];
  currentDate: Date;
}

export interface GetMeetingClientRequestDto {
  sprints: Sprint[];
  sprintNumber: number;
}

export interface GetSprintCheckinStatusClientRequestDto {
  user: User;
  sprintId: number;
}

export interface IsCurrentSprintClientRequestDto {
  sprintNumber: string;
  currentSprintNumber: number;
}

export interface IsVoyageProjestSubmissionAllowedClientRequestDto {
  sprintNumber: string;
}

export interface SubmitWeeklyCheckinClientRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

export interface SubmitVoyageProjectClientRequestDto {
  voyageTeamId: number;
  data: CreateFormResponseBody["data"];
  questions: Question[];
}

// api
export interface FetchSprintsApiRequestDto {
  teamId: string;
}

export interface SubmitWeeklyCheckinApiRequestDto {
  voyageTeamMemberId: number;
  sprintId: number;
  responses: FormResponses[];
}

export interface SubmitVoyageProjectApiRequestDto {
  voyageTeamId: number;
  responses: FormResponses[];
}

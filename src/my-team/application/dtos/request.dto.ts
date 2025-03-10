import type { User } from "@/user";

// client
export interface GetMyTeamClientRequestDto {
  teamId: string;
  user: User;
}

export interface EditHoursClientRequestDto {
  teamId: string;
  hrPerSprint: number;
}

// api
export interface GetMyTeamApiRequestDto {
  teamId: string;
}

export interface EditHoursApiRequestDto {
  teamId: string;
  hrPerSprint: number;
}

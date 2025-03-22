import type { User } from "@/user";

// client
export interface FetchMyTeamClientRequestDto {
  teamId: string;
  user: User;
}

export interface EditHoursClientRequestDto {
  teamId: string;
  hrPerSprint: number;
}

// api
export interface FetchMyTeamApiRequestDto {
  teamId: string;
}

export interface EditHoursApiRequestDto {
  teamId: string;
  hrPerSprint: number;
}

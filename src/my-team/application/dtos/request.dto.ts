import type { User } from "@/user";

export interface GetMyTeamClientRequestDto {
  teamId: string;
  user: User;
}

export interface GetMyTeamApiRequestDto {
  teamId: number;
}

export interface EditHoursRequestDto {
  teamId: number;
  hrPerSprint: number;
}

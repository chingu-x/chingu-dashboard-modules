import type { User } from "@/user";

export interface GetMyTeamClientRequestDto {
  teamId: string;
  user: User;
}

export interface GetMyTeamApiRequestDto {
  teamId: string;
}

export interface EditHoursRequestDto {
  teamId: string;
  hrPerSprint: number;
}

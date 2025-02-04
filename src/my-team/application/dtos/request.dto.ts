import type { User } from "@/user";

export interface GetMyTeamClientRequestDto {
  teamId: string;
  user: User;
}

export interface GetMyTeamApiRequestDto {
  teamId: string;
}

export interface EditHoursClientRequestDto {
  teamId: string;
  hrPerSprint: number;
}

export type EditHoursApiRequestDto = EditHoursClientRequestDto;

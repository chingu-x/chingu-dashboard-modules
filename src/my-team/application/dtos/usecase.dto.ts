import type { User } from "@/user/application/types";

export interface GetMyTeamUsecaseDto {
  teamId: string;
  user: User;
}

export interface EditHoursUsecaseDto {
  teamId: string;
  hrPerSprint: number;
}

import type { User } from "@/user/application/types";

export interface FetchMyTeamUsecaseDto {
  teamId: string;
  user: User;
}

export interface EditHoursUsecaseDto {
  teamId: string;
  hrPerSprint: number;
}

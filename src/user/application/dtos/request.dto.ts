import type { VoyageSprint } from "@/sprints/application/types";
import type { User } from "@/user/application/types";

export interface FetchCurrentUserClientRequestDto {
  currentDate: Date;
}
export interface GetChinguMemberStatusClientRequestDto {
  user: User;
}

export interface GetActiveTeamsClientRequestDto {
  user: User;
  sprints: VoyageSprint[];
}

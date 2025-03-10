import type { User } from "@/user/application/types";

export interface FetchCurrentUserClientRequestDto {
  currentDate: Date;
}
export interface GetChinguMemberStatusClientRequestDto {
  user: User;
}

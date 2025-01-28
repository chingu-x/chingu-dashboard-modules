import type { User } from "@/user/application/types";

export interface FetchCurrentUserClientRequesstDto {
  currentDate: Date;
}
export type FetchUserRequestDto = User;

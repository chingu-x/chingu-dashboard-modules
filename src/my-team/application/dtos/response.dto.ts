import type { MyTeam } from "@/my-team/application/types";

export type FetchMyTeamResponseDto = MyTeam;

export interface EditHoursResponseDto {
  id: number;
  userId: string;
  voyageTeamId: number;
  voyageRoleId: number;
  statusId: number;
  createdAt: string;
  updatedAt: string;
}

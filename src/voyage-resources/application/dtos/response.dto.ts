import type { VoyageResource } from "@/voyage-resources/application/types";

// client

// api
export type FetchVoyageResourcesResponseDto = VoyageResource[];

export interface AddVoyageResourceResponseDto {
  id: number;
  teamMemberId: number;
  url: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

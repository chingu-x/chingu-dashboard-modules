import type { VoyageMember } from "@/features/application/types";

export interface VoyageResource {
  id: number;
  teamMemberId: number;
  url: string;
  title: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  addedBy: {
    member: VoyageMember;
  };
}

export enum SortOption {
  ASC = "ASC",
  DESC = "DESC",
}

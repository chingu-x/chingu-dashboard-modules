import type { VoyageMember } from "@/features/application/types";

export interface TechStackCategory {
  id: number;
  name: string;
  description: string;
  teamTechStackItems: TechStackItem[];
}

export interface TechStackItem {
  id: number;
  name: string;
  isSelected: boolean;
  teamTechStackItemVotes: TechStackItemVotes[];
}

export interface TechStackItemVotes {
  votedBy: {
    member: VoyageMember;
  };
}

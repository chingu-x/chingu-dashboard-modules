import type { VoyageMember } from "@/features/application/types";

export interface Ideation {
  id: number;
  title: string;
  description: string;
  vision: string;
  isSelected: boolean;
  createdAt: string;
  updatedAt: string;
  contributedBy: {
    member: VoyageMember;
  };
  projectIdeaVotes: ProjectIdeaVotes[];
}

export interface ProjectIdeaVotes {
  id: number;
  voyageTeamMemberId: number;
  projectIdeaId: number;
  createdAt: string;
  updatedAt: string;
  votedBy: {
    member: VoyageMember;
  };
}

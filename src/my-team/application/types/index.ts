import type {
  UserVoyageStatus,
  CurrentVoyageTeamMember,
  CurrentVoyageTier,
} from "@/voyage-team/application/types";

export interface MyTeam {
  id: number;
  voyageId: number;
  name: string;
  status: UserVoyageStatus;
  repoUrl: string;
  repoUrlBE: string;
  deployedUrl: string;
  deployedUrlBE: string;
  tier: CurrentVoyageTier;
  endDate: string;
  voyageTeamMembers: CurrentVoyageTeamMember[];
}

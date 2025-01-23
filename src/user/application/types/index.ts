// import { type VoyageTeamMember } from "@/modules/voyage-team/application/dtos/response.dto";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  oAuthProfiles: {
    provider: {
      name: providerType;
    };
    providerUsername: string;
  }[];
  email: string;
  timezone: string;
  avatar: string;
  voyageTeamMembers: VoyageTeamMember[];
  sprintCheckIn: number[];
  currentDateInUserTimezone: Date | null;
}

type providerType = "discord";

// remove later

export interface VoyageTeamMember {
  id: number;
  voyageTeamId: number;
  voyageTeam: VoyageTeam;
  voyageRole: VoyageRole;
}

interface Voyage {
  status: VoyageStatus;
}

interface VoyageTeam {
  name: string;
  voyage: Voyage;
  projectSubmitted: boolean;
}

export interface VoyageRole {
  name: string;
}

export interface VoyageStatus {
  name: string;
}

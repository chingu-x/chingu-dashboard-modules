import { type User } from "@/user";

// user voyage
export interface UserVoyageTeamMember {
  id: number;
  voyageTeamId: number;
  voyageTeam: UserVoyageTeam;
  voyageRole: UserVoyageRole;
}

export interface UserVoyageStatus {
  name: string;
}

interface UserVoyage {
  number: string;
  status: UserVoyageStatus;
}

interface UserVoyageTeam {
  name: string;
  voyage: UserVoyage;
  projectSubmitted: boolean;
}

export interface UserVoyageRole {
  name: string;
}

// current voyage
export interface CurrentVoyageTeamMember {
  id: number;
  member: CurrentVoyageMember;
  hrPerSprint: number;
  voyageRole: UserVoyageRole;
}

type CurrentVoyageMember = Pick<
  User,
  | "firstName"
  | "lastName"
  | "avatar"
  | "oAuthProfiles"
  | "countryCode"
  | "timezone"
> & {
  currentTime: string;
};

export interface CurrentVoyageTier {
  id: number;
  name: string;
}

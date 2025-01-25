import { type UserVoyageTeamMember } from "@/voyage-team/application/types";

enum Roles {
  voyager,
  admin,
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles: Roles[];
  avatar: string;
  oAuthProfiles: {
    provider: {
      name: providerType;
    };
    providerUsername: string;
  }[];
  email: string;
  countryCode: string;
  timezone: string;
  voyageTeamMembers: UserVoyageTeamMember[];
  sprintCheckIn: number[];
  currentDateInUserTimezone: Date | null;
}

type providerType = "discord";

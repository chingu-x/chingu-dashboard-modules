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
      name: ProviderType;
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

export type ProviderType = "discord";

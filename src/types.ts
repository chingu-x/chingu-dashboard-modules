import { USER_TYPES } from "./user/di/types";
import { VOYAGE_TEAM_TYPES } from "./voyage-team/di/types";
import { REST_API_TYPES } from "./rest-api/di/types";
import { AUTH_TYPES } from "./auth/di/types";

export const TYPES = {
  ...USER_TYPES,
  ...VOYAGE_TEAM_TYPES,
  ...REST_API_TYPES,
  ...AUTH_TYPES,
};

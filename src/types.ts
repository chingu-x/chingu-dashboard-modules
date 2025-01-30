import { USER_TYPES } from "./user/di/types";
import { VOYAGE_TEAM_TYPES } from "./voyage-team/di/types";
import { REST_API_TYPES } from "./rest-api/di/types";
import { AUTH_TYPES } from "./auth/di/types";
import { My_TEAM_TYPES } from "./my-team/di/types";
import { SPRINTS_TYPES } from "./sprints/application/di/types";
import { SPRINT_MEETING_TYPES } from "./sprint-meeting/di/types";
import { FORMS_TYPES } from "./forms/di/types";

export const TYPES = {
  ...USER_TYPES,
  ...VOYAGE_TEAM_TYPES,
  ...REST_API_TYPES,
  ...AUTH_TYPES,
  ...My_TEAM_TYPES,
  ...SPRINTS_TYPES,
  ...SPRINT_MEETING_TYPES,
  ...FORMS_TYPES,
};

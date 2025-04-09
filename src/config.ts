import { container } from "tsyringe";
import { registerAuthDependencies } from "./auth/di/config";
import { registerRestApiDependencies } from "./rest-api/di/config";
import { registerUserDependencies } from "./user/di/config";
import { registerVoyageTeamDependencies } from "./voyage-team/di/config";
import { registerMyTeamDependencies } from "./my-team/di/config";
import { registerSprintsDependencies } from "./sprints/di/config";
import { registerSprintMeetingDependencies } from "./sprint-meeting/di/config";
import { registerFormsDependencies } from "./forms/di/config";
import { registerTimezoneDependencies } from "./timezone/di/config";
import { registerFeaturesDependencies } from "./features/di/config";
import { registerVoyageResourcesDependencies } from "./voyage-resources/di/config";
import { registerTechStackDependencies } from "./tech-stack/di/config";

export const registerDependencies = () => {
  registerRestApiDependencies();
  registerAuthDependencies();
  registerUserDependencies();
  registerVoyageTeamDependencies();
  registerMyTeamDependencies();
  registerSprintsDependencies();
  registerSprintMeetingDependencies();
  registerFormsDependencies();
  registerTimezoneDependencies();
  registerFeaturesDependencies();
  registerVoyageResourcesDependencies();
  registerTechStackDependencies();
};

registerDependencies();

export default container;

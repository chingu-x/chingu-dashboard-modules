import { container } from "tsyringe";
import { registerAuthDependencies } from "./auth/di/config";
import { registerRestApiDependencies } from "./rest-api/di/config";
import { registerUserDependencies } from "./user/di/config";
import { registerVoyageTeamDependencies } from "./voyage-team/di/config";
import { registerMyTeamDependencies } from "./my-team/di/config";
export const registerDependencies = () => {
  registerRestApiDependencies();
  registerAuthDependencies();
  registerUserDependencies();
  registerVoyageTeamDependencies();
  registerMyTeamDependencies();
};

registerDependencies();

export default container;

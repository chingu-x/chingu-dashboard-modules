import type { InjectionToken } from "tsyringe";
import type { RestApiPort } from "./rest-api/ports/secondary/restApiPort";
import type {
  AuthApiPort,
  AuthClientAdapter,
  LoginUsecase,
  LogoutUsecase,
  RequestResetPasswordUsecase,
  ResetPasswordUsecase,
} from "./auth";
import type { UserApiPort } from "./user/ports/secondary/userApiPort";
import type { UserClientAdapter } from "./user/adapters/primary/userClientAdapter";
import type { GetUserUsecase } from "./user/application/usecases/getUserUsecase";
import type { GetChinguMemberStatusUsecase } from "./user/application/usecases/getChinguMemberStatusUsecase";
import type { VoyageTeamClientPort } from "./voyage-team/ports/primary/voyageTeamClientPort";
import type { VoyageTeamClientAdapter } from "./voyage-team/adapters/primary/voyageTeamClientAdapter";
import type { GetCurrentVoyageTeamUsecase } from "./voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import type { GetCurrentVoyageTeamIdUsecase } from "./voyage-team/application/usecases/getCurrentVoyageTeamIdUsecase";
import type { HasVoyageStartedUsecase } from "./voyage-team/application/usecases/hasVoyageStartedUsecase";

export const TYPES = {
  /* Ports */
  RestApiPort: Symbol.for("RestApiPort") as InjectionToken<RestApiPort>,
  AuthApiPort: Symbol.for("AuthApiPort") as InjectionToken<AuthApiPort>,
  UserApiPort: Symbol.for("UserApiPort") as InjectionToken<UserApiPort>,
  VoyageTeamClientPort: Symbol.for(
    "VoyageTeamClientPort",
  ) as InjectionToken<VoyageTeamClientPort>,

  /* Adapters */
  AuthClientAdapter: Symbol.for(
    "AuthClientAdapter",
  ) as InjectionToken<AuthClientAdapter>,
  UserClientAdapter: Symbol.for(
    "UserClientAdapter",
  ) as InjectionToken<UserClientAdapter>,
  VoyageTeamClientAdapter: Symbol.for(
    "VoyageTeamClientAdapter",
  ) as InjectionToken<VoyageTeamClientAdapter>,

  /* UseCases */
  LoginUsecase: Symbol.for("LoginUsecase") as InjectionToken<LoginUsecase>,
  LogoutUsecase: Symbol.for("LogoutUsecase") as InjectionToken<LogoutUsecase>,
  GetUserUsecase: Symbol.for(
    "GetUserUsecase",
  ) as InjectionToken<GetUserUsecase>,
  GetChinguMemberStatusUsecase: Symbol.for(
    "GetChinguMemberStatusUsecase",
  ) as InjectionToken<GetChinguMemberStatusUsecase>,
  RequestResetPasswordUsecase: Symbol.for(
    "RequestResetPasswordUsecase",
  ) as InjectionToken<RequestResetPasswordUsecase>,
  ResetPasswordUsecase: Symbol.for(
    "ResetPasswordUsecase",
  ) as InjectionToken<ResetPasswordUsecase>,
  GetCurrentVoyageTeamUsecase: Symbol.for(
    "GetCurrentVoyageTeamUsecase",
  ) as InjectionToken<GetCurrentVoyageTeamUsecase>,
  GetCurrentVoyageTeamIdUsecase: Symbol.for(
    "GetCurrentVoyageTeamIdUsecase",
  ) as InjectionToken<GetCurrentVoyageTeamIdUsecase>,
  HasVoyageStartedUsecase: Symbol.for(
    "HasVoyageStartedUsecase",
  ) as InjectionToken<HasVoyageStartedUsecase>,
};

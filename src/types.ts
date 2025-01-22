import type { InjectionToken } from "tsyringe";
import type { RestApiPort } from "./rest-api";
import type {
  AuthApiPort,
  AuthClientAdapter,
  LoginUsecase,
  LogoutUsecase,
  RequestResetPasswordUsecase,
  ResetPasswordUsecase,
} from "./auth";

export const TYPES = {
  /* Ports */
  RestApiPort: Symbol.for("RestApiPort") as InjectionToken<RestApiPort>,
  AuthApiPort: Symbol.for("AuthApiPort") as InjectionToken<AuthApiPort>,
  // UserApiPort: Symbol.for("UserApiPort") as InjectionToken<UserApiPort>,
  // VoyageTeamClientPort: Symbol.for(
  //   "VoyageTeamClientPort"
  // ) as InjectionToken<VoyageTeamClientPort>,

  /* Adapters */
  AuthClientAdapter: Symbol.for(
    "AuthClientAdapter",
  ) as InjectionToken<AuthClientAdapter>,
  // UserClientAdapter: Symbol.for(
  //   "UserClientAdapter"
  // ) as InjectionToken<UserClientAdapter>,
  // VoyageTeamClientAdapter: Symbol.for(
  //   "VoyageTeamClientAdapter"
  // ) as InjectionToken<VoyageTeamClientAdapter>,

  /* UseCases */
  LoginUsecase: Symbol.for("LoginUsecase") as InjectionToken<LoginUsecase>,
  LogoutUsecase: Symbol.for("LogoutUsecase") as InjectionToken<LogoutUsecase>,
  // GetUserUsecase: Symbol.for(
  //   "GetUserUsecase"
  // ) as InjectionToken<GetUserUsecase>,
  // GetChinguMemberStatusUsecase: Symbol.for(
  //   "GetChinguMemberStatusUsecase"
  // ) as InjectionToken<GetChinguMemberStatusUsecase>,
  RequestResetPasswordUsecase: Symbol.for(
    "RequestResetPasswordUsecase",
  ) as InjectionToken<RequestResetPasswordUsecase>,
  ResetPasswordUsecase: Symbol.for(
    "ResetPasswordUsecase",
  ) as InjectionToken<ResetPasswordUsecase>,
  // GetCurrentVoyageTeamUsecase: Symbol.for(
  //   "GetCurrentVoyageTeamUsecase"
  // ) as InjectionToken<GetCurrentVoyageTeamUsecase>,
  // GetCurrentVoyageTeamIdUsecase: Symbol.for(
  //   "GetCurrentVoyageTeamIdUsecase"
  // ) as InjectionToken<GetCurrentVoyageTeamIdUsecase>,
  // HasVoyageStartedUsecase: Symbol.for(
  //   "HasVoyageStartedUsecase"
  // ) as InjectionToken<HasVoyageStartedUsecase>,
};

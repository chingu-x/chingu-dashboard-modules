import type { InjectionToken } from "tsyringe";
import type { AuthApiPort } from "@/auth/ports/secondary/auth-api-port";
import type { AuthClientAdapter } from "@/auth/adapters/primary/auth-client-adapter";
import type { LoginUsecase } from "@/auth/application/usecases/login-usecase";
import type { LogoutUsecase } from "@/auth/application/usecases/logout-usecase";
import type { RequestResetPasswordUsecase } from "@/auth/application/usecases/request-reset-password-usecase";
import type { ResetPasswordUsecase } from "@/auth/application/usecases/reset-password-usecase";

export const AUTH_TYPES = {
  // ports
  AuthApiPort: Symbol.for("AuthApiPort") as InjectionToken<AuthApiPort>,

  // usecases
  LoginUsecase: Symbol.for("LoginUsecase") as InjectionToken<LoginUsecase>,
  LogoutUsecase: Symbol.for("LogoutUsecase") as InjectionToken<LogoutUsecase>,
  RequestResetPasswordUsecase: Symbol.for(
    "RequestResetPasswordUsecase",
  ) as InjectionToken<RequestResetPasswordUsecase>,
  ResetPasswordUsecase: Symbol.for(
    "ResetPasswordUsecase",
  ) as InjectionToken<ResetPasswordUsecase>,

  // adapters
  AuthClientAdapter: Symbol.for(
    "AuthClientAdapter",
  ) as InjectionToken<AuthClientAdapter>,
};

import type { InjectionToken } from "tsyringe";
import type { AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import type { AuthClientAdapter } from "@/auth/adapters/primary/authClientAdapter";
import type { LoginUsecase } from "@/auth/application/usecases/loginUsecase";
import type { LogoutUsecase } from "@/auth/application/usecases/logoutUsecase";
import type { RequestResetPasswordUsecase } from "@/auth/application/usecases/requestResetPasswordUsecase";
import type { ResetPasswordUsecase } from "@/auth/application/usecases/resetPasswordUsecase";

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

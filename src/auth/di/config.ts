import { container } from "tsyringe";
import { AUTH_TYPES } from "./types";
import { AuthApiAdapter } from "@/auth/adapters/secondary/auth-api-adapter";
import { LoginUsecase } from "@/auth/application/usecases/login-usecase";
import { LogoutUsecase } from "@/auth/application/usecases/logout-usecase";
import { RequestResetPasswordUsecase } from "@/auth/application/usecases/request-reset-password-usecase";
import { ResetPasswordUsecase } from "@/auth/application/usecases/reset-password-usecase";
import { AuthClientAdapter } from "@/auth/adapters/primary/auth-client-adapter";

export const registerAuthDependencies = () => {
  // ports
  container.register(AUTH_TYPES.AuthApiPort, { useClass: AuthApiAdapter });

  // usecases
  container.register(AUTH_TYPES.LoginUsecase, { useClass: LoginUsecase });
  container.register(AUTH_TYPES.LogoutUsecase, { useClass: LogoutUsecase });
  container.register(AUTH_TYPES.RequestResetPasswordUsecase, {
    useClass: RequestResetPasswordUsecase,
  });
  container.register(AUTH_TYPES.ResetPasswordUsecase, {
    useClass: ResetPasswordUsecase,
  });

  // adapters
  container.register(AUTH_TYPES.AuthClientAdapter, {
    useClass: AuthClientAdapter,
  });
};

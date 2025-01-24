import { container } from "tsyringe";
import { AUTH_TYPES } from "./types";
import { AuthApiAdapter } from "@/auth/adapters/secondary/authApiAdapter";
import { LoginUsecase } from "@/auth/application/usecases/loginUsecase";
import { LogoutUsecase } from "@/auth/application/usecases/logoutUsecase";
import { RequestResetPasswordUsecase } from "@/auth/application/usecases/requestResetPasswordUsecase";
import { ResetPasswordUsecase } from "@/auth/application/usecases/resetPasswordUsecase";
import { AuthClientAdapter } from "@/auth/adapters/primary/authClientAdapter";

export const registerAuthDependencies = () => {
  // ports
  container.register(AUTH_TYPES.AuthApiPort, { useClass: AuthApiAdapter });

  // adapters
  container.register(AUTH_TYPES.AuthClientAdapter, {
    useClass: AuthClientAdapter,
  });

  // usecases
  container.register(AUTH_TYPES.LoginUsecase, { useClass: LoginUsecase });
  container.register(AUTH_TYPES.LogoutUsecase, { useClass: LogoutUsecase });
  container.register(AUTH_TYPES.RequestResetPasswordUsecase, {
    useClass: RequestResetPasswordUsecase,
  });
  container.register(AUTH_TYPES.ResetPasswordUsecase, {
    useClass: ResetPasswordUsecase,
  });
};

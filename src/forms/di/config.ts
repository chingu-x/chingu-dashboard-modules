import { container } from "tsyringe";
import { FormsApiAdapter } from "@/forms/adapters/secondary/formsApiAdapter";

export const registerFormsDependencies = () => {
  // ports
  container.register(FORMS_TYPES.FormsApiPort, { useClass: FormsApiAdapter });

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

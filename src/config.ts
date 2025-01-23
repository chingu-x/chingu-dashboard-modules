import { container } from "tsyringe";
import { TYPES } from "./types";
import { AxiosAdapter } from "./rest-api/adapters/secondary/AxiosAdapter";
import { AuthApiAdapter } from "./auth/adapters/secondary/authApiAdapter";
import { LoginUsecase } from "./auth/application/usecases/loginUsecase";
import { LogoutUsecase } from "./auth/application/usecases/logoutUsecase";
import { RequestResetPasswordUsecase } from "./auth/application/usecases/requestResetPasswordUsecase";
import { ResetPasswordUsecase } from "./auth/application/usecases/resetPasswordUsecase";
import { AuthClientAdapter } from "./auth/adapters/primary/authClientAdapter";
import { UserApiAdapter } from "./user/adapters/secondary/userApiAdapter";
import { GetUserUsecase } from "./user/application/usecases/getUserUsecase";
import { GetChinguMemberStatusUsecase } from "./user/application/usecases/getChinguMemberStatusUsecase";
import { UserClientAdapter } from "./user/adapters/primary/userClientAdapter";

container.register(TYPES.RestApiPort, { useClass: AxiosAdapter });
container.register(TYPES.AuthApiPort, { useClass: AuthApiAdapter });
container.register(TYPES.UserApiPort, { useClass: UserApiAdapter });
container.register(TYPES.LoginUsecase, { useClass: LoginUsecase });
container.register(TYPES.LogoutUsecase, { useClass: LogoutUsecase });
container.register(TYPES.RequestResetPasswordUsecase, {
  useClass: RequestResetPasswordUsecase,
});
container.register(TYPES.ResetPasswordUsecase, {
  useClass: ResetPasswordUsecase,
});
container.register(TYPES.AuthClientAdapter, { useClass: AuthClientAdapter });
container.register(TYPES.GetUserUsecase, { useClass: GetUserUsecase });
container.register(TYPES.GetChinguMemberStatusUsecase, {
  useClass: GetChinguMemberStatusUsecase,
});
container.register(TYPES.UserClientAdapter, { useClass: UserClientAdapter });
// container.register(TYPES.VoyageTeamClientAdapter, {
//   useClass: VoyageTeamClientAdapter,
// });
// container.register(TYPES.GetCurrentVoyageTeamUsecase, {
//   useClass: GetCurrentVoyageTeamUsecase,
// });
// container.register(TYPES.GetCurrentVoyageTeamIdUsecase, {
//   useClass: GetCurrentVoyageTeamIdUsecase,
// });
// container.register(TYPES.HasVoyageStartedUsecase, {
//   useClass: HasVoyageStartedUsecase,
// });

export default container;

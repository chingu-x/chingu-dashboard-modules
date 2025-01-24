import { container } from "tsyringe";
import { USER_TYPES } from "./types";
import { UserApiAdapter } from "@/user/adapters/secondary/userApiAdapter";
import { UserClientAdapter } from "@/user/adapters/primary/userClientAdapter";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";
import { GetUserUsecase } from "@/user/application/usecases/getUserUsecase";

export const registerUserDependencies = () => {
  container.register(USER_TYPES.UserApiPort, { useClass: UserApiAdapter });
  container.register(USER_TYPES.UserClientAdapter, {
    useClass: UserClientAdapter,
  });
  container.register(USER_TYPES.GetChinguMemberStatusUsecase, {
    useClass: GetChinguMemberStatusUsecase,
  });
  container.register(USER_TYPES.GetUserUsecase, { useClass: GetUserUsecase });
};

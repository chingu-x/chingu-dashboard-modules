import { container } from "tsyringe";
import { USER_TYPES } from "./types";
import { UserApiAdapter } from "@/user/adapters/secondary/userApiAdapter";
import { UserClientAdapter } from "@/user/adapters/primary/userClientAdapter";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";
import { FetchUserUsecase } from "@/user/application/usecases/fetchUserUsecase";

export const registerUserDependencies = () => {
  // ports
  container.register(USER_TYPES.UserApiPort, { useClass: UserApiAdapter });

  // adapters
  container.register(USER_TYPES.UserClientAdapter, {
    useClass: UserClientAdapter,
  });

  // usecases
  container.register(USER_TYPES.GetChinguMemberStatusUsecase, {
    useClass: GetChinguMemberStatusUsecase,
  });
  container.register(USER_TYPES.FetchUserUsecase, {
    useClass: FetchUserUsecase,
  });
};

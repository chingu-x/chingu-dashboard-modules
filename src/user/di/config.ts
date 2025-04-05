import { container } from "tsyringe";
import { USER_TYPES } from "./types";
import { UserApiAdapter } from "@/user/adapters/secondary/user-api-adapter";
import { UserClientAdapter } from "@/user/adapters/primary/user-client-adapter";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/get-chingu-member-status-usecase";
import { FetchUserUsecase } from "@/user/application/usecases/fetch-user-usecase";

export const registerUserDependencies = () => {
  // ports
  container.register(USER_TYPES.UserApiPort, { useClass: UserApiAdapter });

  // usecases
  container.register(USER_TYPES.GetChinguMemberStatusUsecase, {
    useClass: GetChinguMemberStatusUsecase,
  });
  container.register(USER_TYPES.FetchUserUsecase, {
    useClass: FetchUserUsecase,
  });

  // adapters
  container.register(USER_TYPES.UserClientAdapter, {
    useClass: UserClientAdapter,
  });
};

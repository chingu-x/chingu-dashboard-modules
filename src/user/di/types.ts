import type { InjectionToken } from "tsyringe";
import { type UserApiPort } from "@/user/ports/secondary/user-api-port";
import { type UserClientAdapter } from "@/user/adapters/primary/user-client-adapter";
import { type FetchUserUsecase } from "@/user/application/usecases/fetch-user-usecase";
import { type GetChinguMemberStatusUsecase } from "@/user/application/usecases/get-chingu-member-status-usecase";

export const USER_TYPES = {
  // ports
  UserApiPort: Symbol.for("UserApiPort") as InjectionToken<UserApiPort>,

  // usecases
  FetchUserUsecase: Symbol.for(
    "FetchUserUsecase",
  ) as InjectionToken<FetchUserUsecase>,
  GetChinguMemberStatusUsecase: Symbol.for(
    "GetChinguMemberStatusUsecase",
  ) as InjectionToken<GetChinguMemberStatusUsecase>,

  // adapters
  UserClientAdapter: Symbol.for(
    "UserClientAdapter",
  ) as InjectionToken<UserClientAdapter>,
};

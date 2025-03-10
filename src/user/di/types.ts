import type { InjectionToken } from "tsyringe";
import { type UserApiPort } from "@/user/ports/secondary/userApiPort";
import { type UserClientAdapter } from "@/user/adapters/primary/userClientAdapter";
import { type FetchUserUsecase } from "@/user/application/usecases/fetchUserUsecase";
import { type GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";

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

import type { InjectionToken } from "tsyringe";
import { type UserApiPort } from "@/user/ports/secondary/userApiPort";
import { type UserClientAdapter } from "@/user/adapters/primary/userClientAdapter";
import { type GetUserUsecase } from "@/user/application/usecases/getUserUsecase";
import { type GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";

export const USER_TYPES = {
  UserApiPort: Symbol.for("UserApiPort") as InjectionToken<UserApiPort>,
  UserClientAdapter: Symbol.for(
    "UserClientAdapter",
  ) as InjectionToken<UserClientAdapter>,
  GetUserUsecase: Symbol.for(
    "GetUserUsecase",
  ) as InjectionToken<GetUserUsecase>,
  GetChinguMemberStatusUsecase: Symbol.for(
    "GetChinguMemberStatusUsecase",
  ) as InjectionToken<GetChinguMemberStatusUsecase>,
};

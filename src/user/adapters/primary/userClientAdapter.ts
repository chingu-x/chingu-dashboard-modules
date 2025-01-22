import { inject, injectable } from "tsyringe";
import { TYPES } from "src/types";
import { type UserClientPort } from "src/user/ports/primary/userClientPort";
import type {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "src/user/application/dtos/response.dto";
import { GetUserUsecase } from "src/user/application/usecases/getUserUsecase";
import { type GetUserRequestDto } from "src/user/application/dtos/request.dtos";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";

@injectable()
export class UserClientAdapter implements UserClientPort {
  constructor(
    @inject(TYPES.GetUserUsecase)
    private readonly getUserUsecase: GetUserUsecase,

    @inject(TYPES.GetChinguMemberStatusUsecase)
    private readonly getChinguMemberStatusUsecase: GetChinguMemberStatusUsecase,
  ) {}

  async getUser(): Promise<GetUserResponseDto> {
    return await this.getUserUsecase.execute();
  }

  getChinguMemberStatus(
    user: GetUserRequestDto,
  ): GetChinguMemberStatusResponseDto {
    return this.getChinguMemberStatusUsecase.execute(user);
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { type UserClientPort } from "../../ports/primary/userClientPort";
import type {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "../../application/dtos/response.dto";
import { GetUserUsecase } from "../../application/usecases/getUserUsecase";
import { type GetUserRequestDto } from "../../application/dtos/request.dtos";
import { GetChinguMemberStatusUsecase } from "../../application/usecases/getChinguMemberStatusUsecase";

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

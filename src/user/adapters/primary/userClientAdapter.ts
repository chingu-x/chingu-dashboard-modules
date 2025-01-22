import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { GetUserUsecase } from "@/user/application/usecases/getUserUsecase";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";
import { UserClientPort } from "@/user/ports/primary/userClientPort";
import {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "@/user/application/dtos/response.dto";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";

@injectable()
export class UserClientAdapter implements UserClientPort {
  constructor(
    @inject(TYPES.GetUserUsecase)
    private readonly getUserUsecase: GetUserUsecase,

    @inject(TYPES.GetChinguMemberStatusUsecase)
    private readonly getChinguMemberStatusUsecase: GetChinguMemberStatusUsecase
  ) {}

  async getUser(): Promise<GetUserResponseDto> {
    return await this.getUserUsecase.execute();
  }

  getChinguMemberStatus(
    user: GetUserRequestDto
  ): GetChinguMemberStatusResponseDto {
    return this.getChinguMemberStatusUsecase.execute(user);
  }
}

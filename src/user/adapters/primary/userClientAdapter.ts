import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { UserClientPort } from "@/user/ports/primary/userClientPort";
import {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "@/user/application/dtos/response.dto";
import { GetUserUsecase } from "@/user/application/usecases/getUserUsecase";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
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

  // returns true / false whether user is in a current voyage
  getChinguMemberStatus(
    user: GetUserRequestDto,
  ): GetChinguMemberStatusResponseDto {
    return this.getChinguMemberStatusUsecase.execute(user);
  }
}

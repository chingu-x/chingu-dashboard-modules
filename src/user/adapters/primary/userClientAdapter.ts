import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { UserClientPort } from "@/user/ports/primary/userClientPort";
import {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
} from "@/user/application/dtos/response.dto";
import { FetchUserUsecase } from "@/user/application/usecases/fetchUserUsecase";
import {
  FetchCurrentUserClientRequesstDto,
  FetchUserRequestDto,
} from "@/user/application/dtos/request.dtos";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";

@injectable()
export class UserClientAdapter implements UserClientPort {
  constructor(
    @inject(TYPES.FetchUserUsecase)
    private readonly fetchUserUsecase: FetchUserUsecase,

    @inject(TYPES.GetChinguMemberStatusUsecase)
    private readonly getChinguMemberStatusUsecase: GetChinguMemberStatusUsecase,
  ) {}

  async fetchUser({
    currentDate,
  }: FetchCurrentUserClientRequesstDto): Promise<FetchUserResponseDto> {
    return await this.fetchUserUsecase.execute({ currentDate });
  }

  // returns true / false whether user is in a current voyage
  getChinguMemberStatus(
    user: FetchUserRequestDto,
  ): GetChinguMemberStatusResponseDto {
    return this.getChinguMemberStatusUsecase.execute(user);
  }
}

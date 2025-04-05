import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { UserClientPort } from "@/user/ports/primary/user-client-port";
import {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
} from "@/user/application/dtos/response.dto";
import { FetchUserUsecase } from "@/user/application/usecases/fetch-user-usecase";
import {
  FetchCurrentUserClientRequestDto,
  GetChinguMemberStatusClientRequestDto,
} from "@/user/application/dtos/request.dto";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/get-chingu-member-status-usecase";

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
  }: FetchCurrentUserClientRequestDto): Promise<FetchUserResponseDto> {
    return await this.fetchUserUsecase.execute({ currentDate });
  }

  // returns true / false whether user is in a current voyage
  getChinguMemberStatus({
    user,
  }: GetChinguMemberStatusClientRequestDto): GetChinguMemberStatusResponseDto {
    return this.getChinguMemberStatusUsecase.execute({ user });
  }
}

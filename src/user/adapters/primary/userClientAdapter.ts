import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { UserClientPort } from "@/user/ports/primary/userClientPort";
import {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
  GetActiveTeamsResponseDto,
} from "@/user/application/dtos/response.dto";
import { FetchUserUsecase } from "@/user/application/usecases/fetchUserUsecase";
import {
  FetchCurrentUserClientRequestDto,
  GetActiveTeamsClientRequestDto,
  GetChinguMemberStatusClientRequestDto,
} from "@/user/application/dtos/request.dto";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";

@injectable()
export class UserClientAdapter implements UserClientPort {
  constructor(
    @inject(TYPES.FetchUserUsecase)
    private readonly fetchUserUsecase: FetchUserUsecase,

    @inject(TYPES.GetChinguMemberStatusUsecase)
    private readonly getChinguMemberStatusUsecase: GetChinguMemberStatusUsecase,

    @inject(TYPES.GetActiveTeamsUsecase)
    private readonly getActiveTeamsUsecase: GetActiveTeamsUsecase,
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

  getActiveTeams({
    user,
    sprints,
  }: GetActiveTeamsClientRequestDto): GetActiveTeamsResponseDto {
    return this.getActiveTeamsUsecase.execute({ user, sprints });
  }
}

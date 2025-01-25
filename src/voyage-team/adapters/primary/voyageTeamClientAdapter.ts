import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import {
  GetUserVoyageTeamIdResponseDto,
  GetUserVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { GetUserVoyageTeamUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamUsecase";
import { GetUserVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamIdUsecase";
import { HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";

@injectable()
export class VoyageTeamClientAdapter implements VoyageTeamClientPort {
  constructor(
    @inject(TYPES.GetUserVoyageTeamUsecase)
    private readonly getUserVoyageTeamUsecase: GetUserVoyageTeamUsecase,

    @inject(TYPES.GetUserVoyageTeamIdUsecase)
    private readonly getUserVoyageTeamIdUsecase: GetUserVoyageTeamIdUsecase,

    @inject(TYPES.HasVoyageStartedUsecase)
    private readonly hasVoyageStartedUsecase: HasVoyageStartedUsecase,
  ) {}

  getUserVoyageTeam(
    user: GetUserRequestDto,
  ): GetUserVoyageTeamResponseDto | undefined {
    return this.getUserVoyageTeamUsecase.execute(user);
  }

  getUserVoyageTeamId(
    user: GetUserRequestDto,
  ): GetUserVoyageTeamIdResponseDto | undefined {
    const userVoyageTeam = this.getUserVoyageTeam(user);
    return this.getUserVoyageTeamIdUsecase.execute(userVoyageTeam);
  }

  hasVoyageStarted({
    isAuthenticated,
    user,
  }: HasVoyageStartedRequestDto): HasVoyageStartedResponseDto {
    return this.hasVoyageStartedUsecase.execute({ isAuthenticated, user });
  }
}

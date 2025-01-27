import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import {
  GetVoyageTeamIdResponseDto,
  GetUserVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  IsCurrentVoyageTeamResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { GetUserVoyageTeamUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamUsecase";
import { GetVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getVoyageTeamIdUsecase";
import {
  HasVoyageStartedRequestDto,
  IsCurrentVoyageTeamClientRequestDto,
} from "@/voyage-team/application/dtos/request.dto";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";

@injectable()
export class VoyageTeamClientAdapter implements VoyageTeamClientPort {
  constructor(
    @inject(TYPES.GetUserVoyageTeamUsecase)
    private readonly getUserVoyageTeamUsecase: GetUserVoyageTeamUsecase,

    @inject(TYPES.GetVoyageTeamIdUsecase)
    private readonly getVoyageTeamIdUsecase: GetVoyageTeamIdUsecase,

    @inject(TYPES.HasVoyageStartedUsecase)
    private readonly hasVoyageStartedUsecase: HasVoyageStartedUsecase,
    @inject(TYPES.IsCurrentVoyageTeamUsecase)
    private readonly isCurrentVoyageTeamUsecase: IsCurrentVoyageTeamUsecase,
  ) {}

  getUserVoyageTeam(
    user: GetUserRequestDto,
  ): GetUserVoyageTeamResponseDto | undefined {
    return this.getUserVoyageTeamUsecase.execute(user);
  }

  // Get the ID of the voyage team in current voyage
  getVoyageTeamId(
    user: GetUserRequestDto,
  ): GetVoyageTeamIdResponseDto | undefined {
    const userVoyageTeam = this.getUserVoyageTeam(user);
    return this.getVoyageTeamIdUsecase.execute(userVoyageTeam);
  }

  hasVoyageStarted({
    isAuthenticated,
    user,
  }: HasVoyageStartedRequestDto): HasVoyageStartedResponseDto {
    return this.hasVoyageStartedUsecase.execute({ isAuthenticated, user });
  }

  // returns true / false whether the coyage team id is the id of the voyage team belonging to the current user
  isCurrentVoyageTeam({
    user,
    teamId,
  }: IsCurrentVoyageTeamClientRequestDto): IsCurrentVoyageTeamResponseDto {
    const voyageTeamId = this.getVoyageTeamId(user);
    return this.isCurrentVoyageTeamUsecase.execute({ teamId, voyageTeamId });
  }
}

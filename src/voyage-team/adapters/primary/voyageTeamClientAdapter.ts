import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import {
  GetCurrentVoyageTeamIdResponseDto,
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import { GetCurrentVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamIdUsecase";
import { HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";

@injectable()
export class VoyageTeamClientAdapter implements VoyageTeamClientPort {
  constructor(
    @inject(TYPES.GetCurrentVoyageTeamUsecase)
    private readonly getCurrentVoyageTeamUsecase: GetCurrentVoyageTeamUsecase,

    @inject(TYPES.GetCurrentVoyageTeamIdUsecase)
    private readonly getCurrentVoyageTeamIdUsecase: GetCurrentVoyageTeamIdUsecase,

    @inject(TYPES.HasVoyageStartedUsecase)
    private readonly hasVoyageStartedUsecase: HasVoyageStartedUsecase,
  ) {}

  getCurrentVoyageTeam(
    user: GetUserRequestDto,
  ): GetCurrentVoyageTeamResponseDto | undefined {
    return this.getCurrentVoyageTeamUsecase.execute(user);
  }

  getCurrentVoyageTeamId(
    user: GetUserRequestDto,
  ): GetCurrentVoyageTeamIdResponseDto | undefined {
    const currentVoyageTeam = this.getCurrentVoyageTeam(user);
    return this.getCurrentVoyageTeamIdUsecase.execute(currentVoyageTeam);
  }

  hasVoyageStarted({
    isAuthenticated,
    user,
  }: HasVoyageStartedRequestDto): HasVoyageStartedResponseDto {
    return this.hasVoyageStartedUsecase.execute({ isAuthenticated, user });
  }
}

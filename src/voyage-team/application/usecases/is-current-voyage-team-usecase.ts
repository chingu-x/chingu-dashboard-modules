// returns true / false whether the coyage team id is the id of the voyage team belonging to the current user

import { injectable } from "tsyringe";
import { IsCurrentVoyageTeamUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";
import { IsCurrentVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class IsCurrentVoyageTeamUsecase {
  execute({
    teamId,
    currentVoyageTeam,
  }: IsCurrentVoyageTeamUsecaseDto): IsCurrentVoyageTeamResponseDto {
    return currentVoyageTeam.some(
      (team) => team.voyageTeamId === Number(teamId),
    );
  }
}

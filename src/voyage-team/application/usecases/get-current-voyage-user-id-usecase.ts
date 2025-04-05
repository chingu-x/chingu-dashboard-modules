// get the user's id in the current voyage

import { injectable } from "tsyringe";
import { GetCurrentVoyageUserIdUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";
import { GetCurrentVoyageUserIdResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class GetCurrentVoyageUserIdUsecase {
  execute({
    currentVoyageTeam,
    teamId,
  }: GetCurrentVoyageUserIdUsecaseDto): GetCurrentVoyageUserIdResponseDto {
    const currentTeam = currentVoyageTeam.find(
      (team) => team.voyageTeamId === Number(teamId),
    );

    return currentTeam!.id;
  }
}

// Get the ID of the voyage team in current voyage

import { injectable } from "tsyringe";
import { GetVoyageTeamIdResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetVoyageTeamIdUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";

@injectable()
export class GetVoyageTeamIdUsecase {
  execute({
    userVoyageTeam,
  }: GetVoyageTeamIdUsecaseDto): GetVoyageTeamIdResponseDto | undefined {
    return userVoyageTeam?.voyageTeamId.toString();
  }
}

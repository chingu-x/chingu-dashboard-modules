// returns true / false whether the coyage team id is the id of the voyage team belonging to the current user

import { injectable } from "tsyringe";
import { IsCurrentVoyageTeamApiRequestDto } from "@/voyage-team/application/dtos/request.dto";
import { IsCurrentVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class IsCurrentVoyageTeamUsecase {
  execute({
    teamId,
    voyageTeamId,
  }: IsCurrentVoyageTeamApiRequestDto): IsCurrentVoyageTeamResponseDto {
    return teamId === voyageTeamId;
  }
}

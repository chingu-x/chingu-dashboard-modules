import { injectable } from "tsyringe";
import { GetCurrentVoyageTeamIdResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentVoyageTeamIdRequestDto } from "@/voyage-team/application/dtos/request.dto";

@injectable()
export class GetCurrentVoyageTeamIdUsecase {
  execute(
    currentVoyageTeam: GetCurrentVoyageTeamIdRequestDto | undefined,
  ): GetCurrentVoyageTeamIdResponseDto | undefined {
    return currentVoyageTeam?.voyageTeamId.toString();
  }
}

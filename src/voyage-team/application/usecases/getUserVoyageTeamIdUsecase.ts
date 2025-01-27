import { injectable } from "tsyringe";
import { GetUserVoyageTeamIdResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetUserVoyageTeamIdRequestDto } from "@/voyage-team/application/dtos/request.dto";

@injectable()
export class GetUserVoyageTeamIdUsecase {
  execute(
    userVoyageTeam: GetUserVoyageTeamIdRequestDto | undefined,
  ): GetUserVoyageTeamIdResponseDto | undefined {
    return userVoyageTeam?.voyageTeamId.toString();
  }
}

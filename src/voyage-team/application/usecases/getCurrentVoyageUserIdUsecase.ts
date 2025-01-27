// get the user's id in the current voyage

import { injectable } from "tsyringe";
import { GetVoyageTeamIdRequestDto } from "@/voyage-team/application/dtos/request.dto";
import { GetCurrentVoyageUserIdResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class GetCurrentVoyageUserIdUsecase {
  execute(
    userVoyageTeam: GetVoyageTeamIdRequestDto | undefined,
  ): GetCurrentVoyageUserIdResponseDto | undefined {
    return userVoyageTeam?.id;
  }
}

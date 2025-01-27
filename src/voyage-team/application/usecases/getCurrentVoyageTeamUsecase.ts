// gets the current voyage team

import { injectable } from "tsyringe";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import { GetCurrentVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class GetCurrentVoyageTeamUsecase {
  execute(
    props: GetUserRequestDto,
  ): GetCurrentVoyageTeamResponseDto | undefined {
    return props.voyageTeamMembers.find(
      (voyage) => voyage.voyageTeam.voyage.status.name === "Active",
    );
  }
}

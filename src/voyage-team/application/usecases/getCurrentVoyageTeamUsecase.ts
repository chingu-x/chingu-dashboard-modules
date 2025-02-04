// gets the current voyage team

import { injectable } from "tsyringe";
import { FetchUserRequestDto } from "@/user/application/dtos/request.dto";
import { GetCurrentVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class GetCurrentVoyageTeamUsecase {
  execute(
    props: FetchUserRequestDto,
  ): GetCurrentVoyageTeamResponseDto | undefined {
    return props.voyageTeamMembers.find(
      (voyage) => voyage.voyageTeam.voyage.status.name === "Active",
    );
  }
}

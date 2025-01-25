import { injectable } from "tsyringe";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import { GetUserVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";

@injectable()
export class GetUserVoyageTeamUsecase {
  execute(user: GetUserRequestDto): GetUserVoyageTeamResponseDto | undefined {
    return user.voyageTeamMembers.find(
      (voyage) => voyage.voyageTeam.voyage.status.name === "Active",
    );
  }
}

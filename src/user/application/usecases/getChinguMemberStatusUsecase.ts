import { injectable } from "tsyringe";
import { type GetUserRequestDto } from "../../application/dtos/request.dtos";
import { type GetChinguMemberStatusResponseDto } from "../../application/dtos/response.dto";

@injectable()
export class GetChinguMemberStatusUsecase {
  execute(user: GetUserRequestDto): GetChinguMemberStatusResponseDto {
    const data = user.voyageTeamMembers;
    if (data.length === 0) {
      return false;
    }
    return data.some(
      (member) => member.voyageTeam.voyage.status.name === "Active",
    );
  }
}

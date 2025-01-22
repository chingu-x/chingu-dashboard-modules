import { injectable } from "tsyringe";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import { GetChinguMemberStatusResponseDto } from "@/user/application/dtos/response.dto";

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

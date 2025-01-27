// returns true / false whether user is in a current voyage

import { injectable } from "tsyringe";
import { GetChinguMemberStatusResponseDto } from "@/user/application/dtos/response.dto";
import { GetUserRequestDto } from "@/user/application/dtos/request.dtos";

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

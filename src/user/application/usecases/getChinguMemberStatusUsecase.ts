// returns true / false whether user is in a current voyage

import { injectable } from "tsyringe";
import { GetChinguMemberStatusResponseDto } from "@/user/application/dtos/response.dto";
import { FetchUserRequestDto } from "@/user/application/dtos/request.dtos";

@injectable()
export class GetChinguMemberStatusUsecase {
  execute(user: FetchUserRequestDto): GetChinguMemberStatusResponseDto {
    const data = user.voyageTeamMembers;
    if (data.length === 0) {
      return false;
    }
    return data.some(
      (member) => member.voyageTeam.voyage.status.name === "Active",
    );
  }
}

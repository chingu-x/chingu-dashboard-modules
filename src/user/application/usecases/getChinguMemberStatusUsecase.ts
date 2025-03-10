// returns true / false whether user is in a current voyage

import { injectable } from "tsyringe";
import { GetChinguMemberStatusResponseDto } from "@/user/application/dtos/response.dto";
import { GetChinguMemberStatusUsecaseDto } from "@/user/application/dtos/usecase.dto";

@injectable()
export class GetChinguMemberStatusUsecase {
  execute({
    user,
  }: GetChinguMemberStatusUsecaseDto): GetChinguMemberStatusResponseDto {
    const data = user.voyageTeamMembers;
    if (data.length === 0) {
      return false;
    }
    return data.some(
      (member) => member.voyageTeam.voyage.status.name === "Active",
    );
  }
}

import { injectable } from "tsyringe";
import { UpdateDirectoryWithCurrentTimeUsecaseRequestDto } from "@/timezone/application/dtos/usecase.dto";
import { getTimezone } from "@/timezone/application/utils/get-timezone";
import { UpdateDirectoryWithCurrentTimeResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class UpdateDirectoryWithCurrentTimeUsecase {
  execute({
    data,
  }: UpdateDirectoryWithCurrentTimeUsecaseRequestDto): UpdateDirectoryWithCurrentTimeResponseDto {
    return data.voyageTeamMembers.forEach((teamMember) => {
      const { timezone } = teamMember.member;
      const currentTime = getTimezone(timezone);
      teamMember.member.currentTime = currentTime;
    });
  }
}

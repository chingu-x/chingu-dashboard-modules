import { injectable } from "tsyringe";
import { UpdateDirectoryWithCurrentTimeUsecaseRequestDto } from "@/timezone/application/dtos/request.dto";
import { getTimezone } from "@/timezone/application/utils/getTimezone";
import { UpdateDirectoryWithCurrentTimeUsecaseResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class UpdateDirectoryWithCurrentTimeUsecase {
  execute({
    data,
  }: UpdateDirectoryWithCurrentTimeUsecaseRequestDto): UpdateDirectoryWithCurrentTimeUsecaseResponseDto {
    return data.voyageTeamMembers.forEach((teamMember) => {
      const { timezone } = teamMember.member;
      const currentTime = getTimezone(timezone);
      teamMember.member.currentTime = currentTime;
    });
  }
}

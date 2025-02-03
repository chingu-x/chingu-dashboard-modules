import { injectable } from "tsyringe";
import { UpdateDirectoryWithCurrentTimeUsecaseRequestDto } from "@/timezone/application/dtos/request.dto";
import { getTimezone } from "@/timezone/application/utils/getTimezone";

@injectable()
export class UpdateDirectoryWithCurrentTimeUsecase {
  execute({ data }: UpdateDirectoryWithCurrentTimeUsecaseRequestDto): void {
    return data.voyageTeamMembers.forEach((teamMember) => {
      const { timezone } = teamMember.member;
      const currentTime = getTimezone(timezone);
      teamMember.member.currentTime = currentTime;
    });
  }
}

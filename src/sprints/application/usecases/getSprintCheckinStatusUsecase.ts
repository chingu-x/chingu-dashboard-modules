import { injectable } from "tsyringe";
import { GetSprintCheckinStatusRequestDto } from "@/sprints/application/dtos/request.dto";
import { GetSprintCheckinStatusResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetSprintCheckinStatusUsecase {
  execute({
    user,
    sprintNum,
  }: GetSprintCheckinStatusRequestDto): GetSprintCheckinStatusResponseDto {
    return Boolean(
      user.sprintCheckIn.find((sprintNumber) => sprintNumber === sprintNum),
    );
  }
}

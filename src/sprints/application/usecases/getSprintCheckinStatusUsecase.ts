import { injectable } from "tsyringe";
import { GetSprintCheckinStatusRequestDto } from "@/sprints/application/dtos/request.dto";
import { GetSprintCheckinStatusResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetSprintCheckinStatusUsecase {
  execute({
    user,
    sprintId,
  }: GetSprintCheckinStatusRequestDto): GetSprintCheckinStatusResponseDto {
    return Boolean(
      user.sprintCheckIn.find((sprintNumber) => sprintNumber === sprintId),
    );
  }
}

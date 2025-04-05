import { injectable } from "tsyringe";
import { GetSprintCheckinStatusUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { GetSprintCheckinStatusResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetSprintCheckinStatusUsecase {
  execute({
    user,
    sprintId,
  }: GetSprintCheckinStatusUsecaseDto): GetSprintCheckinStatusResponseDto {
    return Boolean(
      user.sprintCheckIn.find((sprintNumber) => sprintNumber === sprintId),
    );
  }
}

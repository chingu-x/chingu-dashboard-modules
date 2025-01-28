import { injectable } from "tsyringe";
import { isWithinInterval } from "date-fns";
import { GetCurrentSprintRequestDto } from "@/sprints/application/dtos/request.dto";
import { GetCurrentSprintResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintUsecase {
  execute({
    sprints,
    currentDate,
  }: GetCurrentSprintRequestDto): GetCurrentSprintResponseDto | undefined {
    const currentSprint = sprints.find((sprint) =>
      isWithinInterval(currentDate, {
        start: sprint.startDate,
        end: sprint.endDate,
      }),
    );

    return currentSprint;
  }
}

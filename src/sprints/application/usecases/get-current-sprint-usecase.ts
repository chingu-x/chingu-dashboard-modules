import { injectable } from "tsyringe";
import { isWithinInterval } from "date-fns";
import { GetCurrentSprintUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { GetCurrentSprintResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintUsecase {
  execute({
    sprints,
    currentDate,
  }: GetCurrentSprintUsecaseDto): GetCurrentSprintResponseDto | undefined {
    const currentSprint = sprints.find((sprint) =>
      isWithinInterval(currentDate, {
        start: sprint.startDate,
        end: sprint.endDate,
      }),
    );

    return currentSprint;
  }
}

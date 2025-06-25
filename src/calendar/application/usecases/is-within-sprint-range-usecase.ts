import { injectable } from "tsyringe";
import { GetSelectedSprintUsecaseDto } from "@/calendar/application/dtos/usecase.dto";
import { GetSelectedSprintResponseDto } from "@/calendar/application/dtos/response.dto";
import { isWithinTwoDates } from "@/calendar/application/utils/isWithinTwoDates";
import convertStringToDate from "@/timezone/application/utils/convert-string-to-date";

@injectable()
export class IsWithinSprintRangeUsecase {
  execute({
    sprints,
    selectedDate,
    timezone,
  }: GetSelectedSprintUsecaseDto): GetSelectedSprintResponseDto {
    for (const sprint of sprints) {
      const startDate = convertStringToDate({
        dateTime: sprint.startDate,
        timezone,
      });
      const endDate = convertStringToDate({
        dateTime: sprint.endDate,
        timezone,
      });

      if (isWithinTwoDates({ currentDate: selectedDate, startDate, endDate })) {
        return sprint.number;
      }
    }
  }
}

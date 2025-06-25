import { injectable } from "tsyringe";
import { IsWithinSprintRangeUsecaseDto } from "@/calendar/application/dtos/usecase.dto";
import { IsWithinSprintRangeResponseDto } from "@/calendar/application/dtos/response.dto";
import { isWithinTwoDates } from "@/calendar/application/utils/isWithinTwoDates";
import convertStringToDate from "@/timezone/application/utils/convert-string-to-date";

@injectable()
export class IsWithinSprintRangeUsecase {
  execute({
    currentDate,
    startDate,
    endDate,
    timezone,
  }: IsWithinSprintRangeUsecaseDto): IsWithinSprintRangeResponseDto {
    return isWithinTwoDates({
      currentDate,
      startDate: convertStringToDate({ dateTime: startDate, timezone }),
      endDate: convertStringToDate({ dateTime: endDate, timezone }),
    });
  }
}

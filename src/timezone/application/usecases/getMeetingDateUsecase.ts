import { injectable } from "tsyringe";
import { getMonth, isToday, isTomorrow } from "date-fns";
import { format } from "date-fns-tz";
import { GetMeetingDateResponseDto } from "@/timezone/application/dtos/response.dto";
import { GetMeetingDateUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import convertStringToDate from "@/timezone/application/utils/convertStringToDate";

// returns date of when the meeting is
// if meeting is today it will return "today"
// if meeting is tomorrow it will return "tomorrow" etc
@injectable()
export class GetMeetingDateUsecase {
  execute({
    dateTime,
    timezone,
  }: GetMeetingDateUsecaseDto): GetMeetingDateResponseDto {
    const dateTimeConvertedToDate = convertStringToDate({ dateTime, timezone });

    if (isToday(dateTimeConvertedToDate)) return "today";
    if (isTomorrow(dateTimeConvertedToDate)) return "tomorrow";
    if (getMonth(dateTimeConvertedToDate) === 4) {
      return format(dateTimeConvertedToDate, "MMM d");
    }

    return format(dateTimeConvertedToDate, "MMM. d");
  }
}

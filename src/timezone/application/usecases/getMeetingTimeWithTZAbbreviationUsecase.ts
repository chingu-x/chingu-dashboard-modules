import { injectable } from "tsyringe";

@injectable()
export class GetMeetingTimeWithTZAbbreviationUsecase {
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

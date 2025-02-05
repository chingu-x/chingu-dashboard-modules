import { injectable } from "tsyringe";
import { format } from "date-fns-tz";
import convertStringToDate from "@/timezone/application/utils/convertStringToDate";
import { GetMeetingTimeWithTZAbbreviationUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetMeetingTimeWithTZAbbreviationResponseDto } from "@/timezone/application/dtos/response.dto";

// returns meeting time with following format: 24:00 (GMT+10)
@injectable()
export class GetMeetingTimeWithTZAbbreviationUsecase {
  execute({
    dateTime,
    timezone,
  }: GetMeetingTimeWithTZAbbreviationUsecaseDto): GetMeetingTimeWithTZAbbreviationResponseDto {
    const dateTimeConvertedToDate = convertStringToDate({ dateTime, timezone });

    return format(dateTimeConvertedToDate, "k:mm (zzz)", {
      timeZone: timezone,
    });
  }
}

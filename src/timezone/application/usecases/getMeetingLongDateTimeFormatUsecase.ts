import { injectable } from "tsyringe";
import { GetMeetingLongDateTimeFormatUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetMeetingLongDateTimeFormatResponseDto } from "@/timezone/application/dtos/response.dto";
import convertStringToDate from "@/timezone/application/utils/convertStringToDate";

// returns date in this format as a date: October 10, 2024 12:00 AM in the user's timezone
@injectable()
export class GetMeetingLongDateTimeFormatUsecase {
  execute({
    meetingDateTime,
    timezone,
  }: GetMeetingLongDateTimeFormatUsecaseDto): GetMeetingLongDateTimeFormatResponseDto {
    return convertStringToDate({ dateTime: meetingDateTime, timezone });
  }
}

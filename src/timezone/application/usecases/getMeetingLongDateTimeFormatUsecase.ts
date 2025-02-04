import { injectable } from "tsyringe";
import { GetMeetingLongDateTimeFormatUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetMeetingLongDateTimeFormatResponseDto } from "@/timezone/application/dtos/response.dto";
import convertStringToDate from "@/timezone/application/utils/convertStringToDate";

@injectable()
export class GetMeetingLongDateTimeFormatUsecase {
  execute({
    meetingDateTime,
    timezone,
  }: GetMeetingLongDateTimeFormatUsecaseDto): GetMeetingLongDateTimeFormatResponseDto {
    return convertStringToDate({ dateTime: meetingDateTime, timezone });
  }
}

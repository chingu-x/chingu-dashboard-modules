import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TimezoneClientPort } from "@/timezone/ports/primary/timezoneClientPort";
import { GetMeetingLongDateTimeFormatClientRequestDto } from "@/timezone/application/dtos/request.dto";
import { GetMeetingLongDateTimeFormatResponseDto } from "@/timezone/application/dtos/response.dto";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";

@injectable()
export class TimezoneClientAdapter implements TimezoneClientPort {
  constructor(
    @inject(TYPES.GetMeetingLongDateTimeFormatUsecase)
    private readonly getMeetingLongDateTimeFormatUsecase: GetMeetingLongDateTimeFormatUsecase,
  ) {}

  // returns date in this format as a date: October 10, 2024 12:00 AM in the user's timezone
  getMeetingLongDateTimeFormat({
    meetingDateTime,
    timezone,
  }: GetMeetingLongDateTimeFormatClientRequestDto): GetMeetingLongDateTimeFormatResponseDto {
    return this.getMeetingLongDateTimeFormatUsecase.execute({
      meetingDateTime,
      timezone,
    });
  }
}

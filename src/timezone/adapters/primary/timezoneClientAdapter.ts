import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TimezoneClientPort } from "@/timezone/ports/primary/timezoneClientPort";
import {
  GetMeetingDateClientRequestDto,
  GetMeetingLongDateTimeFormatClientRequestDto,
} from "@/timezone/application/dtos/request.dto";
import { GetMeetingLongDateTimeFormatResponseDto } from "@/timezone/application/dtos/response.dto";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";

@injectable()
export class TimezoneClientAdapter implements TimezoneClientPort {
  constructor(
    @inject(TYPES.GetMeetingLongDateTimeFormatUsecase)
    private readonly getMeetingLongDateTimeFormatUsecase: GetMeetingLongDateTimeFormatUsecase,

    @inject(TYPES.GetMeetingDatetUsecase)
    private readonly getMeetingDateUsecase: GetMeetingDateUsecase,
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

  // returns date of when the meeting is
  // if meeting is today it will return "today"
  // if meeting is tomorrow it will return "tomorrow" etc
  getMeetingDate({
    dateTime,
    timezone,
  }: GetMeetingDateClientRequestDto): GetMeetingDateResponseDto {
    return this.getMeetingDateUsecase.execute({
      dateTime,
      timezone,
    });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TimezoneClientPort } from "@/timezone/ports/primary/timezoneClientPort";
import {
  GetMeetingDateClientRequestDto,
  GetMeetingLongDateTimeFormatClientRequestDto,
  GetMeetingTimeWithTZAbbreviationClientRequestDto,
  GetSprintStartDateBySprintNumberClientRequestDto,
} from "@/timezone/application/dtos/request.dto";
import {
  GetMeetingDateResponseDto,
  GetMeetingLongDateTimeFormatResponseDto,
  GetMeetingTimeWithTZAbbreviationResponseDto,
  GetSprintStartDateBySprintNumberResponseDto,
} from "@/timezone/application/dtos/response.dto";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";
import { GetMeetingDateUsecase } from "@/timezone/application/usecases/getMeetingDateUsecase";
import { GetMeetingTimeWithTZAbbreviationUsecase } from "@/timezone/application/usecases/getMeetingTimeWithTZAbbreviationUsecase";
import { GetSprintByNumberUsecase } from "@/sprints/application/usecases/getSprintByNumberUsecase";

@injectable()
export class TimezoneClientAdapter implements TimezoneClientPort {
  constructor(
    @inject(TYPES.GetMeetingLongDateTimeFormatUsecase)
    private readonly getMeetingLongDateTimeFormatUsecase: GetMeetingLongDateTimeFormatUsecase,

    @inject(TYPES.GetMeetingDateUsecase)
    private readonly getMeetingDateUsecase: GetMeetingDateUsecase,

    @inject(TYPES.GetMeetingTimeWithTZAbbreviationUsecase)
    private readonly getMeetingTimeWithTZAbbreviationUsecase: GetMeetingTimeWithTZAbbreviationUsecase,

    @inject(TYPES.GetSprintByNumberUsecase)
    private readonly getSprintByNumberUsecase: GetSprintByNumberUsecase,

    @inject(TYPES.GetSprintStartDateBySprintNumberUsecase)
    private readonly getSprintStartDateBySprintNumberUsecase: GetSprintStartDateBySprintNumberUsecase,
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

  // returns meeting time with following format: 24:00 (GMT+10)
  getMeetingTimeWithTZAbbreviation({
    dateTime,
    timezone,
  }: GetMeetingTimeWithTZAbbreviationClientRequestDto): GetMeetingTimeWithTZAbbreviationResponseDto {
    return this.getMeetingTimeWithTZAbbreviationUsecase.execute({
      dateTime,
      timezone,
    });
  }

  getSprintStartDateBySprintNumber({
    sprints,
    sprintNumber,
    timezone,
  }: GetSprintStartDateBySprintNumberClientRequestDto): GetSprintStartDateBySprintNumberResponseDto {
    const sprint = this.getSprintByNumberUsecase.execute({
      sprints,
      sprintNumber,
    });

    return this.getSprintStartDateBySprintNumberUsecase.execute({
      sprint,
      timezone,
    });
  }
}

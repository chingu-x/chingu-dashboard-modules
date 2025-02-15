import type {
  GetMeetingDateClientRequestDto,
  GetMeetingLongDateTimeFormatClientRequestDto,
  GetMeetingTimeWithTZAbbreviationClientRequestDto,
  GetSprintStartDateBySprintNumberClientRequestDto,
} from "@/timezone/application/dtos/request.dto";
import type {
  GetMeetingDateResponseDto,
  GetMeetingLongDateTimeFormatResponseDto,
  GetMeetingTimeWithTZAbbreviationResponseDto,
  GetSprintStartDateBySprintNumberResponseDto,
} from "@/timezone/application/dtos/response.dto";

export interface TimezoneClientPort {
  getMeetingLongDateTimeFormat: (
    props: GetMeetingLongDateTimeFormatClientRequestDto,
  ) => GetMeetingLongDateTimeFormatResponseDto;

  getMeetingDate: (
    props: GetMeetingDateClientRequestDto,
  ) => GetMeetingDateResponseDto;

  getMeetingTimeWithTZAbbreviation: (
    props: GetMeetingTimeWithTZAbbreviationClientRequestDto,
  ) => GetMeetingTimeWithTZAbbreviationResponseDto;

  getSprintStartDateBySprintNumber: (
    props: GetSprintStartDateBySprintNumberClientRequestDto,
  ) => GetSprintStartDateBySprintNumberResponseDto;
}

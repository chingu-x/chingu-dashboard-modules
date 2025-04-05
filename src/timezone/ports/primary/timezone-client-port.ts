import type {
  GetMeetingDateClientRequestDto,
  GetMeetingLongDateTimeFormatClientRequestDto,
  GetMeetingTimeWithTZAbbreviationClientRequestDto,
  GetSprintEndDateBySprintNumberClientRequestDto,
  GetSprintStartDateBySprintNumberClientRequestDto,
} from "@/timezone/application/dtos/request.dto";
import type {
  GetMeetingDateResponseDto,
  GetMeetingLongDateTimeFormatResponseDto,
  GetMeetingTimeWithTZAbbreviationResponseDto,
  GetSprintEndDateBySprintNumberResponseDto,
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

  getSprintEndDateBySprintNumber: (
    props: GetSprintEndDateBySprintNumberClientRequestDto,
  ) => GetSprintEndDateBySprintNumberResponseDto;

  getVoyageResourceAddedDate: (
    props: GetVoyageResourceAddedDateClientRequestDto,
  ) => GetVoyageResourceAddedDateResponseDto;
}

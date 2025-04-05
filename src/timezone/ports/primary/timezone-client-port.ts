import type {
  GetMeetingDateClientRequestDto,
  GetMeetingLongDateTimeFormatClientRequestDto,
  GetMeetingTimeWithTZAbbreviationClientRequestDto,
  GetSprintEndDateBySprintNumberClientRequestDto,
  GetSprintStartDateBySprintNumberClientRequestDto,
  GetVoyageResourceDateClientRequestDto,
} from "@/timezone/application/dtos/request.dto";
import type {
  GetMeetingDateResponseDto,
  GetMeetingLongDateTimeFormatResponseDto,
  GetMeetingTimeWithTZAbbreviationResponseDto,
  GetSprintEndDateBySprintNumberResponseDto,
  GetSprintStartDateBySprintNumberResponseDto,
  GetVoyageResourceDateResponseDto,
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

  getVoyageResourceDate: (
    props: GetVoyageResourceDateClientRequestDto,
  ) => GetVoyageResourceDateResponseDto;
}

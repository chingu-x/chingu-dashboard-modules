import type {
  GetMeetingDateClientRequestDto,
  GetMeetingLongDateTimeFormatClientRequestDto,
} from "@/timezone/application/dtos/request.dto";
import type {
  GetMeetingDateResponseDto,
  GetMeetingLongDateTimeFormatResponseDto,
} from "@/timezone/application/dtos/response.dto";

export interface TimezoneClientPort {
  getMeetingLongDateTimeFormat: (
    props: GetMeetingLongDateTimeFormatClientRequestDto,
  ) => GetMeetingLongDateTimeFormatResponseDto;

  getMeetingDate: (
    props: GetMeetingDateClientRequestDto,
  ) => GetMeetingDateResponseDto;
}

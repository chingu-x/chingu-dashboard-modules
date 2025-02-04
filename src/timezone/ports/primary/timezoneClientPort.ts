import type { GetMeetingLongDateTimeFormatClientRequestDto } from "@/timezone/application/dtos/request.dto";
import type { GetMeetingLongDateTimeFormatResponseDto } from "@/timezone/application/dtos/response.dto";

export interface TimezoneClientPort {
  getMeetingLongDateTimeFormat: (
    props: GetMeetingLongDateTimeFormatClientRequestDto,
  ) => GetMeetingLongDateTimeFormatResponseDto;
}

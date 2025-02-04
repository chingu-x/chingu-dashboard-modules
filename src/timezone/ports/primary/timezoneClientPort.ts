export interface TimezoneClientPort {
  getMeetingLongDateTimeFormat: (
    props: GetMeetingLongDateTimeFormatClientRequestDto,
  ) => GetMeetingLongDateTimeFormatResponseDto;
}

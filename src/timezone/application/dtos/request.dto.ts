// client
export interface GetMeetingLongDateTimeFormatClientRequestDto {
  meetingDateTime: string;
  timezone: string;
}

export interface GetMeetingDateClientRequestDto {
  dateTime: string;
  timezone: string;
}

export interface GetMeetingTimeWithTZAbbreviationClientRequestDto {
  dateTime: string;
  timezone: string;
}

// api

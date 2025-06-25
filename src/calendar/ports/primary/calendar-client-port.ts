import type {
  GetMeetingEventDataClientRequestDto,
  GetSelectedSprintClientRequestDto,
  GetVoyageEndDateClientRequestDto,
  GetVoyageStartDateClientRequestDto,
  IsWithinSprintRangeClientRequestDto,
} from "@/calendar/application/dtos/request.dto";
import type {
  GetMeetingEventDataResponseDto,
  GetSelectedSprintResponseDto,
  GetVoyageEndDateResponseDto,
  GetVoyageStartDateResponseDto,
  IsWithinSprintRangeResponseDto,
} from "@/calendar/application/dtos/response.dto";

export interface CalendarClientPort {
  getVoyageStartDate: (
    props: GetVoyageStartDateClientRequestDto,
  ) => GetVoyageStartDateResponseDto;

  getVoyageEndDate: (
    props: GetVoyageEndDateClientRequestDto,
  ) => GetVoyageEndDateResponseDto;

  isWithinSprintRange: (
    props: IsWithinSprintRangeClientRequestDto,
  ) => IsWithinSprintRangeResponseDto;

  getSelectedSprint: (
    props: GetSelectedSprintClientRequestDto,
  ) => GetSelectedSprintResponseDto;

  getMeetingEventData: (
    props: GetMeetingEventDataClientRequestDto,
  ) => GetMeetingEventDataResponseDto;
}

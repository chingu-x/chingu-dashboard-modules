import type {
  GetVoyageEndDateClientRequestDto,
  GetVoyageStartDateClientRequestDto,
  IsWithinTwoDatesClientRequestDto,
} from "@/calendar/application/dtos/request.dto";
import type {
  GetVoyageEndDateResponseDto,
  GetVoyageStartDateResponseDto,
  IsWithinTwoDatesResponseDto,
} from "@/calendar/application/dtos/response.dto";

export interface CalendarClientPort {
  getVoyageStartDate: (
    props: GetVoyageStartDateClientRequestDto,
  ) => GetVoyageStartDateResponseDto;

  getVoyageEndDate: (
    props: GetVoyageEndDateClientRequestDto,
  ) => GetVoyageEndDateResponseDto;

  isWithinTwoDates: (
    props: IsWithinTwoDatesClientRequestDto,
  ) => IsWithinTwoDatesResponseDto;
}

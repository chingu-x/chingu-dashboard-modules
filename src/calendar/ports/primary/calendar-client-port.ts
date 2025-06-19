import type {
  GetVoyageEndDateClientRequestDto,
  GetVoyageStartDateClientRequestDto,
} from "@/calendar/application/dtos/request.dto";
import type {
  GetVoyageEndDateResponseDto,
  GetVoyageStartDateResponseDto,
} from "@/calendar/application/dtos/response.dto";

export interface CalendarClientPort {
  getVoyageStartDate: (
    props: GetVoyageStartDateClientRequestDto,
  ) => GetVoyageStartDateResponseDto;

  getVoyageEndDate: (
    props: GetVoyageEndDateClientRequestDto,
  ) => GetVoyageEndDateResponseDto;
}

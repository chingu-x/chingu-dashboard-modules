import type { GetVoyageStartDateClientRequestDto } from "@/calendar/application/dtos/request.dto";
import type { GetVoyageStartDateResponseDto } from "@/calendar/application/dtos/response.dto";

export interface CalendarClientPort {
  getVoyageStartDate: (
    props: GetVoyageStartDateClientRequestDto,
  ) => Promise<GetVoyageStartDateResponseDto>;
}

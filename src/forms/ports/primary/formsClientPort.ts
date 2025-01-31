import type { FetchWeeklyCheckinFormClientRequestDto } from "@/forms/application/dtos/request.dto";
import type { FetchWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchWeeklyCheckinForm: (
    props: FetchWeeklyCheckinFormClientRequestDto,
  ) => Promise<FetchWeeklyCheckinFormResponseDto>;
}

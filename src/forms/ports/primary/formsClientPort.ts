import type { GetWeeklyCheckinFormClientRequestDto } from "@/forms/application/dtos/request.dto";
import type { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  getWeeklyCheckinForm: (
    props: GetWeeklyCheckinFormClientRequestDto
  ) => Promise<GetWeeklyCheckinFormResponseDto>;
}

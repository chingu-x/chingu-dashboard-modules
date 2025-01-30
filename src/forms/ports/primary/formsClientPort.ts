import type { GetWeeklyCheckinFormRequestDto } from "@/forms/application/dtos/request.dto";
import type { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  getWeeklyCheckinForm: (
    props: GetWeeklyCheckinFormRequestDto
  ) => Promise<GetWeeklyCheckinFormResponseDto>;
}

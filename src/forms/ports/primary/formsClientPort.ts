import type {
  FetchWeeklyCheckinFormClientRequestDto,
  SubmitWeeklyCheckinFormClientRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchWeeklyCheckinFormResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchWeeklyCheckinForm: (
    props: FetchWeeklyCheckinFormClientRequestDto
  ) => Promise<FetchWeeklyCheckinFormResponseDto>;

  submitWeeklyCheckinForm: (
    props: SubmitWeeklyCheckinFormClientRequestDto
  ) => Promise<SubmitWeeklyCheckinFormResponseDto>;
}

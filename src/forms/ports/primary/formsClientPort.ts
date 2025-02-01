import type {
  FetchWeeklyCheckinFormClientRequestDto,
  SubmitWeeklyCheckinFormClientRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchSubmitVoyageProjectFormResponseDto,
  FetchWeeklyCheckinFormResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchWeeklyCheckinForm: (
    props: FetchWeeklyCheckinFormClientRequestDto,
  ) => Promise<FetchWeeklyCheckinFormResponseDto>;

  fetchSubmitVoyageProjectForm: () => Promise<FetchSubmitVoyageProjectFormResponseDto>;

  submitWeeklyCheckinForm: (
    props: SubmitWeeklyCheckinFormClientRequestDto,
  ) => Promise<SubmitWeeklyCheckinFormResponseDto>;
}

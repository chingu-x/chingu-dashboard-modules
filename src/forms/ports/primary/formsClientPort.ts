import type {
  FetchWeeklyCheckinFormClientRequestDto,
  SubmitVoyageProjectFormClientRequestDto,
  SubmitWeeklyCheckinFormClientRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchSubmitVoyageProjectFormResponseDto,
  FetchWeeklyCheckinFormResponseDto,
  SubmitVoyageProjectFormResponseDto,
  SubmitWeeklyCheckinFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchWeeklyCheckinForm: (
    props: FetchWeeklyCheckinFormClientRequestDto,
  ) => Promise<FetchWeeklyCheckinFormResponseDto>;

  submitWeeklyCheckinForm: (
    props: SubmitWeeklyCheckinFormClientRequestDto,
  ) => Promise<SubmitWeeklyCheckinFormResponseDto>;

  fetchSubmitVoyageProjectForm: () => Promise<FetchSubmitVoyageProjectFormResponseDto>;

  submitVoyageProjectForm: ({
    voyageTeamId,
    data,
    questions,
  }: SubmitVoyageProjectFormClientRequestDto) => Promise<SubmitVoyageProjectFormResponseDto>;
}

import type {
  FetchWeeklyCheckinFormClientRequestDto,
  SubmitVoyageProjectFormClientRequestDto,
} from "@/forms/application/dtos/request.dto";
import type {
  FetchSubmitVoyageProjectFormResponseDto,
  FetchWeeklyCheckinFormResponseDto,
  SubmitVoyageProjectFormResponseDto,
} from "@/forms/application/dtos/response.dto";

export interface FormsClientPort {
  fetchWeeklyCheckinForm: (
    props: FetchWeeklyCheckinFormClientRequestDto,
  ) => Promise<FetchWeeklyCheckinFormResponseDto>;

  fetchSubmitVoyageProjectForm: () => Promise<FetchSubmitVoyageProjectFormResponseDto>;

  addSprintMeetingSection: (
    props: AddSprintMeetingSectionClientRequestDto,
  ) => Promise<AddSprintMeetingSectionClientResponseDto>;
}

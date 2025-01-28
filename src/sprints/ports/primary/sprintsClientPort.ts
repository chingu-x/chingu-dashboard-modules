import type {
  FetchSprintsClientRequestDto,
  GetCurrentSprintRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchSprintsResponseDto,
  GetCurrentSprintResponseDto,
} from "@/sprints/application/dtos/response.dto";

export interface SprintsClientPort {
  fetchSprints: (
    props: FetchSprintsClientRequestDto,
  ) => Promise<FetchSprintsResponseDto>;
  getCurrentSprint: (
    props: GetCurrentSprintRequestDto,
  ) => GetCurrentSprintResponseDto | undefined;
}

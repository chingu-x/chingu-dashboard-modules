import type { FetchSprintsApiRequestDto } from "@/sprints/application/dtos/request.dto";
import type { FetchSprintsResponseDto } from "@/sprints/application/dtos/response.dto";

export interface SprintsApiPort {
  fetchSprints: ({
    teamId,
  }: FetchSprintsApiRequestDto) => Promise<FetchSprintsResponseDto>;
}

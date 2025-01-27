import type { FetchSprintsClientRequestDto } from "@/sprints/application/dtos/request.dto";
import type { FetchSprintsResponseDto } from "@/sprints/application/dtos/response.dto";

export interface SprintsClientPort {
  fetchSprints: (
    props: FetchSprintsClientRequestDto,
  ) => Promise<FetchSprintsResponseDto>;
}

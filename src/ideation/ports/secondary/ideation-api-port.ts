import type { FetchIdeationApiRequestDto } from "@/ideation/application/dtos/request.dto";
import type { FetchIdeationClientResponseDto } from "@/ideation/application/dtos/response.dto";

export interface IdeationApiPort {
  fetchIdeation: ({
    teamId,
  }: FetchIdeationApiRequestDto) => Promise<FetchIdeationClientResponseDto>;
}

import type { FetchFeaturesClientRequestDto } from "@/features/application/dtos/request.dto";
import type { FetchFeaturesResponseDto } from "@/features/application/dtos/response.dto";

export interface FeaturesApiPort {
  fetchFeatures: ({
    teamId,
  }: FetchFeaturesClientRequestDto) => Promise<FetchFeaturesResponseDto>;
}

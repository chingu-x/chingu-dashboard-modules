import type { FetchFeaturesApiRequestDto } from "@/features/application/dtos/request.dto";
import type { FetchFeaturesApiResponseDto } from "@/features/application/dtos/response.dto";

export interface FeaturesApiPort {
  fetchFeatures: ({
    teamId,
  }: FetchFeaturesApiRequestDto) => Promise<FetchFeaturesApiResponseDto>;
}

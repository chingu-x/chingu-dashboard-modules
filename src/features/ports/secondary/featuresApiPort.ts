import type { FetchFeaturesClientRequestDto } from "@/features/application/dtos/request.dto";
import type { FetchFeaturesApiResponseDto } from "@/features/application/dtos/response.dto";

export interface FeaturesApiPort {
  fetchFeatures: ({
    teamId,
  }: FetchFeaturesClientRequestDto) => Promise<FetchFeaturesApiResponseDto>;
}

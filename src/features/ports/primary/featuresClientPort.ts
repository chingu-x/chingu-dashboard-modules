import type { FetchFeaturesClientRequestDto } from "@/features/application/dtos/request.dto";
import type { FetchFeaturesClientResponseDto } from "@/features/application/dtos/response.dto";

export interface FeaturesClientPort {
  fetchFeatures: (
    props: FetchFeaturesClientRequestDto,
  ) => Promise<FetchFeaturesClientResponseDto>;
  addFeature: (
    props: AddFeatureClientRequestDto,
  ) => Promise<AddFeatureResponseDto>;
}

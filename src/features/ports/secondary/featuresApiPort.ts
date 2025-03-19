import type {
  AddFeatureApiRequestDto,
  FetchFeaturesApiRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureApiResponseDto,
  FetchFeaturesApiResponseDto,
} from "@/features/application/dtos/response.dto";

export interface FeaturesApiPort {
  fetchFeatures: ({
    teamId,
  }: FetchFeaturesApiRequestDto) => Promise<FetchFeaturesApiResponseDto>;

  addFeature: (
    props: AddFeatureApiRequestDto,
  ) => Promise<AddFeatureApiResponseDto>;
}

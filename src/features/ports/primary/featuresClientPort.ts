import type {
  AddFeatureClientRequestDto,
  EditFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureClientResponseDto,
  EditFeatureClientResponseDto,
  FetchFeaturesClientResponseDto,
} from "@/features/application/dtos/response.dto";

export interface FeaturesClientPort {
  fetchFeatures: (
    props: FetchFeaturesClientRequestDto,
  ) => Promise<FetchFeaturesClientResponseDto>;
  addFeature: (
    props: AddFeatureClientRequestDto,
  ) => Promise<AddFeatureClientResponseDto>;
  editFeature: (
    props: EditFeatureClientRequestDto,
  ) => Promise<EditFeatureClientResponseDto>;
  fetchFeature: (
    props: FetchFeatureClientRequestDto
  ) => Promise<FetchFeatureClientResponseDto
}

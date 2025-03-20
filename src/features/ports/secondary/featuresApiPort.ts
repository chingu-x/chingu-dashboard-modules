import type {
  AddFeatureApiRequestDto,
  EditFeatureApiRequestDto,
  FetchFeatureApiRequestDto,
  FetchFeaturesApiRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureApiResponseDto,
  EditFeatureApiResponseDto,
  FetchFeatureApiResponseDto,
  FetchFeaturesApiResponseDto,
} from "@/features/application/dtos/response.dto";

export interface FeaturesApiPort {
  fetchFeatures: ({
    teamId,
  }: FetchFeaturesApiRequestDto) => Promise<FetchFeaturesApiResponseDto>;

  addFeature: ({
    teamId,
    description,
    featureCategoryId,
  }: AddFeatureApiRequestDto) => Promise<AddFeatureApiResponseDto>;

  editFeature: ({
    featureId,
    teamMemberId,
    description,
  }: EditFeatureApiRequestDto) => Promise<EditFeatureApiResponseDto>;

  fetchFeature: ({
    featureId,
  }: FetchFeatureApiRequestDto) => Promise<FetchFeatureApiResponseDto>;
}

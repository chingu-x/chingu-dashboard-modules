import type {
  AddFeatureApiRequestDto,
  DeleteFeatureApiRequestDto,
  EditFeatureApiRequestDto,
  FetchFeatureApiRequestDto,
  FetchFeaturesApiRequestDto,
  SaveOrderApiRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureApiResponseDto,
  DeleteFeatureApiResponseDto,
  EditFeatureApiResponseDto,
  FetchFeatureApiResponseDto,
  FetchFeaturesApiResponseDto,
  SaveOrderApiResponseDto,
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

  deleteFeature: ({
    featureId,
  }: DeleteFeatureApiRequestDto) => Promise<DeleteFeatureApiResponseDto>;

  saveOrder: ({
    featureId,
    order,
    featureCategoryId,
  }: SaveOrderApiRequestDto) => Promise<SaveOrderApiResponseDto>;
}

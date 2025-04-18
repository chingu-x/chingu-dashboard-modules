import type {
  AddFeatureApiRequestDto,
  DeleteFeatureApiRequestDto,
  EditFeatureApiRequestDto,
  FetchFeaturesApiRequestDto,
  SaveOrderApiRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureApiResponseDto,
  DeleteFeatureApiResponseDto,
  EditFeatureApiResponseDto,
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

  deleteFeature: ({
    featureId,
  }: DeleteFeatureApiRequestDto) => Promise<DeleteFeatureApiResponseDto>;

  saveOrder: ({
    featureId,
    order,
    featureCategoryId,
  }: SaveOrderApiRequestDto) => Promise<SaveOrderApiResponseDto>;
}

import type {
  AddFeatureClientRequestDto,
  DeleteFeatureClientRequestDto,
  EditFeatureClientRequestDto,
  FetchFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureClientResponseDto,
  DeleteFeatureClientResponseDto,
  EditFeatureClientResponseDto,
  FetchFeatureClientResponseDto,
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
    props: FetchFeatureClientRequestDto,
  ) => Promise<FetchFeatureClientResponseDto>;
  deleteFeature: (
    props: DeleteFeatureClientRequestDto,
  ) => Promise<DeleteFeatureClientResponseDto>;
  saveOrder: (
    props: SaveOrderClientRequestDto,
  ) => Promise<SaveOrderClientResponseDto>;
}

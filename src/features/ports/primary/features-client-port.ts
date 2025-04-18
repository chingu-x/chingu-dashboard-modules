import type {
  AddFeatureClientRequestDto,
  DeleteFeatureClientRequestDto,
  EditFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
  GetMustHaveFeaturesClientRequestDto,
  IsFeatureOwnerClientRequestDto,
  SaveOrderClientRequestDto,
} from "@/features/application/dtos/request.dto";
import type {
  AddFeatureClientResponseDto,
  DeleteFeatureClientResponseDto,
  EditFeatureClientResponseDto,
  FetchFeaturesClientResponseDto,
  GetMustHaveFeaturesResponseDto,
  IsFeatureOwnerClientResponseDto,
  SaveOrderClientResponseDto,
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

  deleteFeature: (
    props: DeleteFeatureClientRequestDto,
  ) => Promise<DeleteFeatureClientResponseDto>;

  saveOrder: (
    props: SaveOrderClientRequestDto,
  ) => Promise<SaveOrderClientResponseDto>;

  isFeatureOwner: (
    props: IsFeatureOwnerClientRequestDto,
  ) => IsFeatureOwnerClientResponseDto;

  getMustHaveFeatures: (
    props: GetMustHaveFeaturesClientRequestDto,
  ) => GetMustHaveFeaturesResponseDto;
}

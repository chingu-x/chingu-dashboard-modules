import type {
  AddFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
} from "@/features/application/dtos/request.dto";
import type { FetchFeaturesClientResponseDto } from "@/features/application/dtos/response.dto";

type NewType = AddFeatureResponseDto;

export interface FeaturesClientPort {
  fetchFeatures: (
    props: FetchFeaturesClientRequestDto,
  ) => Promise<FetchFeaturesClientResponseDto>;
  addFeature: (props: AddFeatureClientRequestDto) => Promise<NewType>;
}

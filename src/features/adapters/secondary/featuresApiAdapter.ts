import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";
import {
  AddFeatureApiRequestDto,
  EditFeatureApiRequestDto,
  FetchFeaturesApiRequestDto,
} from "@/features/application/dtos/request.dto";
import {
  AddFeatureApiResponseDto,
  EditFeatureApiResponseDto,
  FetchFeaturesApiResponseDto,
} from "@/features/application/dtos/response.dto";
import FeaturesUrls from "@/features/application/constants/featuresUrls";

@injectable()
export class FeaturesApiAdapter implements FeaturesApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchFeatures({
    teamId,
  }: FetchFeaturesApiRequestDto): Promise<FetchFeaturesApiResponseDto> {
    return await this.apiClient.get({
      url: FeaturesUrls.fetchFeatures({ teamId }),
    });
  }

  async addFeature({
    teamId,
    description,
    featureCategoryId,
  }: AddFeatureApiRequestDto): Promise<AddFeatureApiResponseDto> {
    return await this.apiClient.post({
      url: FeaturesUrls.addFeature({ teamId }),
      payload: { description, featureCategoryId },
    });
  }

  async editFeature({
    featureId,
    teamMemberId,
    description,
  }: EditFeatureApiRequestDto): Promise<EditFeatureApiResponseDto> {
    return await this.apiClient.patch({
      url: FeaturesUrls.editFeature({
        featureId,
      }),
      payload: { teamMemberId, description },
    });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import { FeaturesApiPort } from "@/features/ports/secondary/features-api-port";
import {
  AddFeatureApiRequestDto,
  DeleteFeatureApiRequestDto,
  EditFeatureApiRequestDto,
  FetchFeatureApiRequestDto,
  FetchFeaturesApiRequestDto,
  SaveOrderApiRequestDto,
} from "@/features/application/dtos/request.dto";
import {
  AddFeatureApiResponseDto,
  DeleteFeatureApiResponseDto,
  EditFeatureApiResponseDto,
  FetchFeatureApiResponseDto,
  FetchFeaturesApiResponseDto,
  SaveOrderApiResponseDto,
} from "@/features/application/dtos/response.dto";
import FeaturesUrls from "@/features/application/constants/features-urls";

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

  async fetchFeature({
    featureId,
  }: FetchFeatureApiRequestDto): Promise<FetchFeatureApiResponseDto> {
    return await this.apiClient.get({
      url: FeaturesUrls.fetchFeature({ featureId }),
    });
  }

  async deleteFeature({
    featureId,
  }: DeleteFeatureApiRequestDto): Promise<DeleteFeatureApiResponseDto> {
    return await this.apiClient.delete({
      url: FeaturesUrls.deleteFeature({ featureId }),
    });
  }

  async saveOrder({
    featureId,
    order,
    featureCategoryId,
  }: SaveOrderApiRequestDto): Promise<SaveOrderApiResponseDto> {
    return await this.apiClient.patch({
      url: FeaturesUrls.saveOrder({ featureId }),
      payload: { order, featureCategoryId },
    });
  }
}

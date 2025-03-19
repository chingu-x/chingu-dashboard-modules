import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesClientPort } from "@/features/ports/primary/featuresClientPort";
import {
  AddFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
} from "@/features/application/dtos/request.dto";
import {
  AddFeatureClientResponseDto,
  FetchFeaturesClientResponseDto,
} from "@/features/application/dtos/response.dto";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";

@injectable()
export class FeaturesClientAdapter implements FeaturesClientPort {
  constructor(
    @inject(TYPES.FetchFeaturesUsecase)
    private readonly fetchFeaturesUsecase: FetchFeaturesUsecase,

    @inject(TYPES.AddFeatureUsecase)
    private readonly addFeatureUsecase: AddFeatureUsecase,
  ) {}

  async fetchFeatures({
    teamId,
  }: FetchFeaturesClientRequestDto): Promise<FetchFeaturesClientResponseDto> {
    return await this.fetchFeaturesUsecase.execute({ teamId });
  }

  async addFeature({
    teamId,
    description,
    featureCategoryId,
  }: AddFeatureClientRequestDto): Promise<AddFeatureClientResponseDto> {
    return await this.addFeatureUsecase.execute({
      teamId,
      description,
      featureCategoryId,
    });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesClientPort } from "@/features/ports/primary/featuresClientPort";
import {
  AddFeatureClientRequestDto,
  EditFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
} from "@/features/application/dtos/request.dto";
import {
  AddFeatureClientResponseDto,
  EditFeatureClientResponseDto,
  FetchFeaturesClientResponseDto,
} from "@/features/application/dtos/response.dto";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import { AddFeatureUsecase } from "@/features/application/usecases/addFeatureUsecase";
import { EditFeatureUsecase } from "@/features/application/usecases/editFeatureUsecase";

@injectable()
export class FeaturesClientAdapter implements FeaturesClientPort {
  constructor(
    @inject(TYPES.FetchFeaturesUsecase)
    private readonly fetchFeaturesUsecase: FetchFeaturesUsecase,

    @inject(TYPES.AddFeatureUsecase)
    private readonly addFeatureUsecase: AddFeatureUsecase,

    @inject(TYPES.EditFeatureUsecase)
    private readonly editFeatureUsecase: EditFeatureUsecase,
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

  async editFeature({
    featureId,
    teamMemberId,
    description,
  }: EditFeatureClientRequestDto): Promise<EditFeatureClientResponseDto> {
    return await this.editFeatureUsecase.execute({
      featureId,
      teamMemberId,
      description,
    });
  }
}

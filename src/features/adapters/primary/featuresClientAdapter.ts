import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesClientPort } from "@/features/ports/primary/featuresClientPort";
import {
  AddFeatureClientRequestDto,
  DeleteFeatureClientRequestDto,
  EditFeatureClientRequestDto,
  FetchFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
} from "@/features/application/dtos/request.dto";
import {
  AddFeatureClientResponseDto,
  DeleteFeatureClientResponseDto,
  EditFeatureClientResponseDto,
  FetchFeatureClientResponseDto,
  FetchFeaturesClientResponseDto,
} from "@/features/application/dtos/response.dto";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import { AddFeatureUsecase } from "@/features/application/usecases/addFeatureUsecase";
import { EditFeatureUsecase } from "@/features/application/usecases/editFeatureUsecase";
import { FetchFeatureUsecase } from "@/features/application/usecases/fetchFeatureUsecase";

@injectable()
export class FeaturesClientAdapter implements FeaturesClientPort {
  constructor(
    @inject(TYPES.FetchFeaturesUsecase)
    private readonly fetchFeaturesUsecase: FetchFeaturesUsecase,

    @inject(TYPES.AddFeatureUsecase)
    private readonly addFeatureUsecase: AddFeatureUsecase,

    @inject(TYPES.EditFeatureUsecase)
    private readonly editFeatureUsecase: EditFeatureUsecase,

    @inject(TYPES.FetchFeatureUsecase)
    private readonly fetchFeatureUsecase: FetchFeatureUsecase,

    @inject(TYPES.DeleteFeatureUsecase)
    private readonly deleteFeatureUsecase: DeleteFeatureUsecase,
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

  async fetchFeature({
    featureId,
  }: FetchFeatureClientRequestDto): Promise<FetchFeatureClientResponseDto> {
    return await this.fetchFeatureUsecase.execute({ featureId });
  }

  async deleteFeature({
    featureId,
  }: DeleteFeatureClientRequestDto): Promise<DeleteFeatureClientResponseDto> {
    return await this.deleteFeatureUsecase.execute({ featureId });
  }
}

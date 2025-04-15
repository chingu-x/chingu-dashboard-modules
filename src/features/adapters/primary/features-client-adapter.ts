import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesClientPort } from "@/features/ports/primary/features-client-port";
import {
  AddFeatureClientRequestDto,
  DeleteFeatureClientRequestDto,
  EditFeatureClientRequestDto,
  FetchFeatureClientRequestDto,
  FetchFeaturesClientRequestDto,
  GetMustHaveFeaturesClientRequestDto,
  IsFeatureOwnerClientRequestDto,
  SaveOrderClientRequestDto,
} from "@/features/application/dtos/request.dto";
import {
  AddFeatureClientResponseDto,
  DeleteFeatureClientResponseDto,
  EditFeatureClientResponseDto,
  FetchFeatureClientResponseDto,
  FetchFeaturesClientResponseDto,
  GetMustHaveFeaturesResponseDto,
  IsFeatureOwnerClientResponseDto,
  SaveOrderClientResponseDto,
} from "@/features/application/dtos/response.dto";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetch-features-usecase";
import { AddFeatureUsecase } from "@/features/application/usecases/add-feature-usecase";
import { EditFeatureUsecase } from "@/features/application/usecases/edit-feature-usecase";
import { FetchFeatureUsecase } from "@/features/application/usecases/fetch-feature-usecase";
import { DeleteFeatureUsecase } from "@/features/application/usecases/delete-feature-usecase";
import { SaveOrderUsecase } from "@/features/application/usecases/save-order-usecase";
import { IsFeatureOwnerUsecase } from "@/features/application/usecases/is-feature-owner-usecase";

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

    @inject(TYPES.SaveOrderUsecase)
    private readonly saveOrderUsecase: SaveOrderUsecase,

    @inject(TYPES.IsFeatureOwnerUsecase)
    private readonly isFeatureOwnerUsecase: IsFeatureOwnerUsecase,

    @inject(TYPES.GetMustHaveFeaturesUsecase)
    private readonly getMustHaveFeaturesUsecase: GetMustHaveFeaturesUsecase,
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

  async saveOrder({
    featureId,
    order,
    featureCategoryId,
  }: SaveOrderClientRequestDto): Promise<SaveOrderClientResponseDto> {
    return await this.saveOrderUsecase.execute({
      featureId,
      order,
      featureCategoryId,
    });
  }

  isFeatureOwner({
    userId,
    addedById,
  }: IsFeatureOwnerClientRequestDto): IsFeatureOwnerClientResponseDto {
    return this.isFeatureOwnerUsecase.execute({ userId, addedById });
  }

  getMustHaveFeatures({
    features,
  }: GetMustHaveFeaturesClientRequestDto): GetMustHaveFeaturesResponseDto {
    return this.getMustHaveFeaturesUsecase.execute({ features });
  }
}

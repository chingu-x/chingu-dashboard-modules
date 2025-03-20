import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";

@injectable()
export class IsFeatureOwnerUsecase {
  async execute({
    teamId,
    description,
    featureCategoryId,
  }: AddFeatureUsecaseDto): Promise<AddFeatureClientResponseDto> {
    return await this.featuresApi.addFeature({
      teamId,
      description,
      featureCategoryId,
    });
  }
}

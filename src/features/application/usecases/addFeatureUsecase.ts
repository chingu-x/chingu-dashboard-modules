import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";
import { AddFeatureUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { AddFeatureClientResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class AddFeatureUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly featuresApi: FeaturesApiPort,
  ) {}

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

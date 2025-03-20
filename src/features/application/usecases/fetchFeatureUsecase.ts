import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";
import { FetchFeatureUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { FetchFeatureClientResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class FetchFeatureUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly featuresApi: FeaturesApiPort,
  ) {}

  async execute({
    featureId,
  }: FetchFeatureUsecaseDto): Promise<FetchFeatureClientResponseDto> {
    return await this.featuresApi.fetchFeature({ featureId });
  }
}

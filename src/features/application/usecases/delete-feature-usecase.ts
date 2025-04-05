import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/features-api-port";
import { DeleteFeatureUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { DeleteFeatureClientResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class DeleteFeatureUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly featuresApi: FeaturesApiPort,
  ) {}

  async execute({
    featureId,
  }: DeleteFeatureUsecaseDto): Promise<DeleteFeatureClientResponseDto> {
    return await this.featuresApi.deleteFeature({ featureId });
  }
}

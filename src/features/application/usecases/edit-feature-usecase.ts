import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/features-api-port";
import { EditFeatureUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { EditFeatureClientResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class EditFeatureUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly featuresApi: FeaturesApiPort,
  ) {}

  async execute({
    featureId,
    teamMemberId,
    description,
  }: EditFeatureUsecaseDto): Promise<EditFeatureClientResponseDto> {
    return await this.featuresApi.editFeature({
      featureId,
      teamMemberId,
      description,
    });
  }
}

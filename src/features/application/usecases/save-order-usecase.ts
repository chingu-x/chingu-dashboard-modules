import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/features-api-port";
import { SaveOrderUsecaseDto } from "@/features/application/dtos/usecase.dto";
import { SaveOrderClientResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class SaveOrderUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly featuresApi: FeaturesApiPort,
  ) {}

  async execute({
    featureId,
    order,
    featureCategoryId,
  }: SaveOrderUsecaseDto): Promise<SaveOrderClientResponseDto> {
    return await this.featuresApi.saveOrder({
      featureId,
      order,
      featureCategoryId,
    });
  }
}

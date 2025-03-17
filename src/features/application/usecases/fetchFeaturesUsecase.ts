import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";

@injectable()
export class FetchFeaturesUsecase {
  constructor(
    @inject(TYPES.FeaturesApiPort)
    private readonly sprintsApi: FeaturesApiPort,
  ) {}

  async execute({
    teamId,
  }: FetchSprintsUsecaseDto): Promise<FetchSprintsResponseDto> {
    return await this.sprintsApi.fetchSprints({ teamId });
  }
}

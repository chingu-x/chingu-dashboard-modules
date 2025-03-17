import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesClientPort } from "@/features/ports/primary/featuresClientPort";
import { FetchFeaturesClientRequestDto } from "@/features/application/dtos/request.dto";
import { FetchFeaturesResponseDto } from "@/features/application/dtos/response.dto";

@injectable()
export class FeaturesClientAdapter implements FeaturesClientPort {
  constructor(
    @inject(TYPES.FetchFeaturesUsecase)
    private readonly fetchFeaturesUsecase: FetchFeaturesUsecase,
  ) {}

  fetchFeatures({
    teamId,
  }: FetchFeaturesClientRequestDto): Promise<FetchFeaturesResponseDto> {
    return this.fetchFeaturesUsecase.execute({ teamId });
  }
}

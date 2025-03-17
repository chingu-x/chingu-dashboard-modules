import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FeaturesClientPort } from "@/features/ports/primary/featuresClientPort";
import { FetchFeaturesClientRequestDto } from "@/features/application/dtos/request.dto";
import { FetchFeaturesClientResponseDto } from "@/features/application/dtos/response.dto";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";

@injectable()
export class FeaturesClientAdapter implements FeaturesClientPort {
  constructor(
    @inject(TYPES.FetchFeaturesUsecase)
    private readonly fetchFeaturesUsecase: FetchFeaturesUsecase,
  ) {}

  fetchFeatures({
    teamId,
  }: FetchFeaturesClientRequestDto): Promise<FetchFeaturesClientResponseDto> {
    return this.fetchFeaturesUsecase.execute({ teamId });
  }
}

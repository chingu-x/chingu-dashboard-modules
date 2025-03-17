import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";

@injectable()
export class FeaturesApiAdapter implements FeaturesApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchFeatures({
    teamId,
  }: FetchSprintsApiRequestDto): Promise<FetchSprintsResponseDto> {
    return await this.apiClient.get({
      url: SprintsUrls.fetchSprints({ teamId }),
    });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";
import { FetchFeaturesClientRequestDto } from "@/features/application/dtos/request.dto";
import { FetchFeaturesApiResponseDto } from "@/features/application/dtos/response.dto";
import FeaturesUrls from "@/features/application/constants/featuresUrls";

@injectable()
export class FeaturesApiAdapter implements FeaturesApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchFeatures({
    teamId,
  }: FetchFeaturesClientRequestDto): Promise<FetchFeaturesApiResponseDto> {
    return await this.apiClient.get({
      url: FeaturesUrls.fetchFeatures({ teamId }),
    });
  }
}

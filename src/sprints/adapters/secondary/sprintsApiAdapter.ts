import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprintsApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { FetchSprintsApiRequestDto } from "@/sprints/application/dtos/request.dto";
import { FetchSprintsResponseDto } from "@/sprints/application/dtos/response.dto";
import SprintsUrls from "@/sprints/application/constants/sprintsUrls";

@injectable()
export class SprintsApiAdapter implements SprintsApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchSprints({
    teamId,
  }: FetchSprintsApiRequestDto): Promise<FetchSprintsResponseDto> {
    return await this.apiClient.get({
      url: SprintsUrls.fetchSprints({ teamId }),
    });
  }
}

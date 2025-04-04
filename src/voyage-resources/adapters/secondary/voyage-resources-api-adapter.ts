import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import { VoyageResourcesApiPort } from "@/voyage-resources/ports/secondary/voyage-resources-api-port";
import {
  AddVoyageResourceApiRequestDto,
  FetchVoyageResourcesApiRequestDto,
} from "@/voyage-resources/application/dtos/request.dto";
import {
  AddVoyageResourceResponseDto,
  FetchVoyageResourcesResponseDto,
} from "@/voyage-resources/application/dtos/response.dto";
import VoyageResourcesUrls from "@/voyage-resources/application/constants/voyage-resources-urls";

@injectable()
export class VoyageResourcesApiAdapter implements VoyageResourcesApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchVoyageResources({
    teamId,
  }: FetchVoyageResourcesApiRequestDto): Promise<FetchVoyageResourcesResponseDto> {
    return await this.apiClient.get({
      url: VoyageResourcesUrls.fetchVoyageResources({ teamId }),
    });
  }

  async addVoyageResource({
    teamId,
    url,
    title,
  }: AddVoyageResourceApiRequestDto): Promise<AddVoyageResourceResponseDto> {
    return await this.apiClient.post({
      url: VoyageResourcesUrls.addVoyageResource({ teamId }),
      payload: { url, title },
    });
  }
}

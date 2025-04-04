import type { FetchVoyageResourcesApiRequestDto } from "@/voyage-resources/application/dtos/request.dto";
import type { FetchVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

export interface VoyageResourcesApiPort {
  fetchVoyageResources: ({
    teamId,
  }: FetchVoyageResourcesApiRequestDto) => Promise<FetchVoyageResourcesResponseDto>;
}

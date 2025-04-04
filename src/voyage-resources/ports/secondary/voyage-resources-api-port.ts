import { FetchVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

export interface VoyageResourcesApiPort {
  fetchVoyageResources: ({
    teamId,
  }: FetchVoyageResourcesApiRequestDto) => Promise<FetchVoyageResourcesResponseDto>;
}

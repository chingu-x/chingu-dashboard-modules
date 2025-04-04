import type { FetchVoyageResourcesClientRequestDto } from "@/voyage-resources/application/dtos/request.dto";
import type { FetchVoyageResourcesResponseDto } from "@/voyage-resources/application/dtos/response.dto";

export interface VoyageResourcesClientPort {
  fetchVoyageResources: (
    props: FetchVoyageResourcesClientRequestDto,
  ) => Promise<FetchVoyageResourcesResponseDto>;
}

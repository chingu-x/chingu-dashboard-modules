import type {
  AddVoyageResourceApiRequestDto,
  DeleteVoyageResourceApiRequestDto,
  FetchVoyageResourcesApiRequestDto,
} from "@/voyage-resources/application/dtos/request.dto";
import type {
  AddVoyageResourceResponseDto,
  DeleteVoyageResourceResponseDto,
  FetchVoyageResourcesResponseDto,
} from "@/voyage-resources/application/dtos/response.dto";

export interface VoyageResourcesApiPort {
  fetchVoyageResources: ({
    teamId,
  }: FetchVoyageResourcesApiRequestDto) => Promise<FetchVoyageResourcesResponseDto>;

  addVoyageResource: ({
    teamId,
    url,
    title,
  }: AddVoyageResourceApiRequestDto) => Promise<AddVoyageResourceResponseDto>;

  deleteVoyageResource: ({
    teamId,
    resourceId,
  }: DeleteVoyageResourceApiRequestDto) => Promise<DeleteVoyageResourceResponseDto>;
}

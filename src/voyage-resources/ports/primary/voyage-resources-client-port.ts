import type {
  AddVoyageResourceClientRequestDto,
  DeleteVoyageResourceClientRequestDto,
  FetchVoyageResourcesClientRequestDto,
  GetTopFiveVoyageResourcesClientRequestDto,
  SortVoyageResourcesClientRequestDto,
} from "@/voyage-resources/application/dtos/request.dto";
import type {
  AddVoyageResourceResponseDto,
  DeleteVoyageResourceResponseDto,
  FetchVoyageResourcesResponseDto,
  GetTopFiveVoyageResourcesResponseDto,
  SortVoyageResourcesResponseDto,
} from "@/voyage-resources/application/dtos/response.dto";

export interface VoyageResourcesClientPort {
  fetchVoyageResources: (
    props: FetchVoyageResourcesClientRequestDto,
  ) => Promise<FetchVoyageResourcesResponseDto>;

  addVoyageResource: (
    props: AddVoyageResourceClientRequestDto,
  ) => Promise<AddVoyageResourceResponseDto>;

  deleteVoyageResource: (
    props: DeleteVoyageResourceClientRequestDto,
  ) => Promise<DeleteVoyageResourceResponseDto>;

  sortVoyageResources: (
    props: SortVoyageResourcesClientRequestDto,
  ) => SortVoyageResourcesResponseDto;

  getTopFiveVoyageResources: (
    props: GetTopFiveVoyageResourcesClientRequestDto,
  ) => GetTopFiveVoyageResourcesResponseDto;
}

export interface VoyageResourcesClientPort {
  fetchVoyageResources: (
    props: FetchVoyageResourcesClientRequestDto,
  ) => Promise<FetchVoyageResourcesResponseDto>;
}

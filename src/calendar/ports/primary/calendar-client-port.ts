export interface FeaturesClientPort {
  getVoyageStartDate: (
    props: FetchFeaturesClientRequestDto,
  ) => Promise<FetchFeaturesClientResponseDto>;
}

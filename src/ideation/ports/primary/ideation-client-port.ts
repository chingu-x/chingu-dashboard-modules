export interface IdeationClientPort {
  fetchIdeation: (
    props: FetchFeaturesClientRequestDto,
  ) => Promise<FetchFeaturesClientResponseDto>;
}

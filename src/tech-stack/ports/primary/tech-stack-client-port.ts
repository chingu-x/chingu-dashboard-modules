export interface TechStackClientPort {
  fetchTechStack: (
    props: FetchTechStackClientRequestDto,
  ) => Promise<FetchTechStackResponseDto>;
}

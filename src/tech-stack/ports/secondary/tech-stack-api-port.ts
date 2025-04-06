export interface TechStackApiPort {
  fetchTechStack: ({
    teamId,
  }: FetchTechStackApiRequestDto) => Promise<FetchTechStackResponseDto>;
}

import type { FetchTechStackApiRequestDto } from "@/tech-stack/application/dtos/request.dto";
import type { FetchTechStackResponseDto } from "@/tech-stack/application/dtos/response.dto";

export interface TechStackApiPort {
  fetchTechStack: ({
    teamId,
  }: FetchTechStackApiRequestDto) => Promise<FetchTechStackResponseDto>;
}

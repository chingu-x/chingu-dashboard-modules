import type { FetchTechStackClientRequestDto } from "@/tech-stack/application/dtos/request.dto";
import type { FetchTechStackResponseDto } from "@/tech-stack/application/dtos/response.dto";

export interface TechStackClientPort {
  fetchTechStack: (
    props: FetchTechStackClientRequestDto,
  ) => Promise<FetchTechStackResponseDto>;
}

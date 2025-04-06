import type {
  AddTechStackItemClientRequestDto,
  FetchTechStackClientRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  FetchTechStackResponseDto,
} from "@/tech-stack/application/dtos/response.dto";

export interface TechStackClientPort {
  fetchTechStack: (
    props: FetchTechStackClientRequestDto,
  ) => Promise<FetchTechStackResponseDto>;

  addTechStackItem: (
    props: AddTechStackItemClientRequestDto,
  ) => Promise<AddTechStackItemResponseDto>;
}

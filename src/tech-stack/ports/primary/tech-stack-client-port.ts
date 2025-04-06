import type {
  AddTechStackItemClientRequestDto,
  EditTechStackItemClientRequestDto,
  FetchTechStackClientRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  EditTechStackItemResponseDto,
  FetchTechStackResponseDto,
} from "@/tech-stack/application/dtos/response.dto";

export interface TechStackClientPort {
  fetchTechStack: (
    props: FetchTechStackClientRequestDto,
  ) => Promise<FetchTechStackResponseDto>;

  addTechStackItem: (
    props: AddTechStackItemClientRequestDto,
  ) => Promise<AddTechStackItemResponseDto>;

  editTechStackItem: (
    props: EditTechStackItemClientRequestDto,
  ) => Promise<EditTechStackItemResponseDto>;
}

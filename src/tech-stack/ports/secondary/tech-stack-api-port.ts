import type {
  AddTechStackItemApiRequestDto,
  EditTechStackItemApiRequestDto,
  FetchTechStackApiRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  EditTechStackItemResponseDto,
  FetchTechStackResponseDto,
} from "@/tech-stack/application/dtos/response.dto";

export interface TechStackApiPort {
  fetchTechStack: ({
    teamId,
  }: FetchTechStackApiRequestDto) => Promise<FetchTechStackResponseDto>;

  addTechStackItem: ({
    teamId,
    techName,
    techCategoryId,
    voyageTeamMemberId,
  }: AddTechStackItemApiRequestDto) => Promise<AddTechStackItemResponseDto>;

  editTechStackItem: ({
    teamTechItemId,
    techName,
  }: EditTechStackItemApiRequestDto) => Promise<EditTechStackItemResponseDto>;
}

import type {
  AddTechStackItemApiRequestDto,
  DeleteTechStackItemApiRequestDto,
  EditTechStackItemApiRequestDto,
  FetchTechStackApiRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  DeleteTechStackItemResponseDto,
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

  deleteTechStackItem: ({
    teamTechItemId,
  }: DeleteTechStackItemApiRequestDto) => Promise<DeleteTechStackItemResponseDto>;
}

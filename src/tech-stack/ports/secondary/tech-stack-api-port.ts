import type {
  AddTechStackItemApiRequestDto,
  AddTechStackItemVoteApiRequestDto,
  DeleteTechStackItemApiRequestDto,
  EditTechStackItemApiRequestDto,
  FetchTechStackApiRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  AddTechStackItemVoteResponseDto,
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

  addTechStackItemVote: ({
    teamTechItemId,
  }: AddTechStackItemVoteApiRequestDto) => Promise<AddTechStackItemVoteResponseDto>;
}

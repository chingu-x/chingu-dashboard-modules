import type {
  AddTechStackItemApiRequestDto,
  AddTechStackItemVoteApiRequestDto,
  DeleteTechStackItemApiRequestDto,
  EditTechStackItemApiRequestDto,
  FetchTechStackApiRequestDto,
  FinalizeTechStackApiRequestDto,
  RemoveTechStackItemVoteApiRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  AddTechStackItemVoteResponseDto,
  DeleteTechStackItemResponseDto,
  EditTechStackItemResponseDto,
  FetchTechStackResponseDto,
  FinalizeTechStackResponseDto,
  RemoveTechStackItemVoteResponseDto,
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

  removeTechStackItemVote: ({
    teamTechItemId,
  }: RemoveTechStackItemVoteApiRequestDto) => Promise<RemoveTechStackItemVoteResponseDto>;

  finalizeTechStack: ({
    techId,
    isSelected,
  }: FinalizeTechStackApiRequestDto) => Promise<FinalizeTechStackResponseDto>;
}

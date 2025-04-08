import type {
  AddTechStackItemClientRequestDto,
  AddTechStackItemVoteClientRequestDto,
  DeleteTechStackItemClientRequestDto,
  EditTechStackItemClientRequestDto,
  FetchTechStackClientRequestDto,
  RemoveTechStackItemVoteClientRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import type {
  AddTechStackItemResponseDto,
  AddTechStackItemVoteResponseDto,
  DeleteTechStackItemResponseDto,
  EditTechStackItemResponseDto,
  FetchTechStackResponseDto,
  RemoveTechStackItemVoteResponseDto,
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

  deleteTechStackItem: (
    props: DeleteTechStackItemClientRequestDto,
  ) => Promise<DeleteTechStackItemResponseDto>;

  addTechStackItemVote: (
    props: AddTechStackItemVoteClientRequestDto,
  ) => Promise<AddTechStackItemVoteResponseDto>;

  removeTechStackItemVote: (
    props: RemoveTechStackItemVoteClientRequestDto,
  ) => Promise<RemoveTechStackItemVoteResponseDto>;
}

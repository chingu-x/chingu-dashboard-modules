import type {
  AddIdeationClientRequestDto,
  AddIdeationVoteClientRequestDto,
  DeleteIdeationClientRequestDto,
  EditIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import type {
  AddIdeationResponseDto,
  AddIdeationVoteResponseDto,
  DeleteIdeationResponseDto,
  EditIdeationResponseDto,
  FetchIdeationResponseDto,
} from "@/ideation/application/dtos/response.dto";

export interface IdeationClientPort {
  fetchIdeation: (
    props: FetchIdeationClientRequestDto,
  ) => Promise<FetchIdeationResponseDto>;

  addIdeation: (
    props: AddIdeationClientRequestDto,
  ) => Promise<AddIdeationResponseDto>;

  editIdeation: (
    props: EditIdeationClientRequestDto,
  ) => Promise<EditIdeationResponseDto>;

  deleteIdeation: (
    props: DeleteIdeationClientRequestDto,
  ) => Promise<DeleteIdeationResponseDto>;

  addIdeationVote: (
    props: AddIdeationVoteClientRequestDto,
  ) => Promise<AddIdeationVoteResponseDto>;

  removeIdeationVote: (
    props: RemoveIdeationVoteClientRequestDto,
  ) => Promise<RemoveIdeationVoteResponseDto>;
}

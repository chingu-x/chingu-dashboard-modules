import type {
  AddIdeationClientRequestDto,
  AddIdeationVoteClientRequestDto,
  DeleteIdeationClientRequestDto,
  EditIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
  FinalizeIdeationClientRequestDto,
  RemoveIdeationVoteClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import type {
  AddIdeationResponseDto,
  AddIdeationVoteResponseDto,
  DeleteIdeationResponseDto,
  EditIdeationResponseDto,
  FetchIdeationResponseDto,
  FinalizeIdeationResponseDto,
  RemoveIdeationVoteResponseDto,
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

  finalizeIdeation: (
    props: FinalizeIdeationClientRequestDto,
  ) => Promise<FinalizeIdeationResponseDto>;

  getIdeationById: (
    props: GetIdeationByIdClientRequestDto,
  ) => GetIdeationByIdResponseDto;

  isCurrentUserVote: (
    props: IsCurrentUserVoteClientRequestDto,
  ) => IsCurrentUserVoteResponseDto;
}

import type {
  AddIdeationClientRequestDto,
  EditIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import type {
  AddIdeationResponseDto,
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
}

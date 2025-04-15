import type {
  AddIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import type {
  AddIdeationResponseDto,
  FetchIdeationResponseDto,
} from "@/ideation/application/dtos/response.dto";

export interface IdeationClientPort {
  fetchIdeation: (
    props: FetchIdeationClientRequestDto,
  ) => Promise<FetchIdeationResponseDto>;

  addIdeation: (
    props: AddIdeationClientRequestDto,
  ) => Promise<AddIdeationResponseDto>;
}

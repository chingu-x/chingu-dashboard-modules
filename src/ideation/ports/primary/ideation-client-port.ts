import type { FetchIdeationClientRequestDto } from "@/ideation/application/dtos/request.dto";
import type { FetchIdeationClientResponseDto } from "@/ideation/application/dtos/response.dto";

export interface IdeationClientPort {
  fetchIdeation: (
    props: FetchIdeationClientRequestDto,
  ) => Promise<FetchIdeationClientResponseDto>;

  addIdeation: (
    props: AddIdeationClientRequestDto,
  ) => Promise<AddIdeationClientResponseDto>;
}

import type {
  AddIdeationApiRequestDto,
  FetchIdeationApiRequestDto,
} from "@/ideation/application/dtos/request.dto";
import type {
  AddIdeationResponseDto,
  FetchIdeationResponseDto,
} from "@/ideation/application/dtos/response.dto";

export interface IdeationApiPort {
  fetchIdeation: ({
    teamId,
  }: FetchIdeationApiRequestDto) => Promise<FetchIdeationResponseDto>;

  addIdeation: ({
    teamId,
    title,
    description,
    vision,
  }: AddIdeationApiRequestDto) => Promise<AddIdeationResponseDto>;
}

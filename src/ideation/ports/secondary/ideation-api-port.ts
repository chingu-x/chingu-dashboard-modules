import type {
  AddIdeationApiRequestDto,
  EditIdeationApiRequestDto,
  FetchIdeationApiRequestDto,
} from "@/ideation/application/dtos/request.dto";
import type {
  AddIdeationResponseDto,
  EditIdeationResponseDto,
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

  editIdeation: ({
    ideationId,
    title,
    description,
    vision,
  }: EditIdeationApiRequestDto) => Promise<EditIdeationResponseDto>;
}

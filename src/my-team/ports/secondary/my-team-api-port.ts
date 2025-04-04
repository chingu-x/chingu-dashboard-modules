import type {
  EditHoursApiRequestDto,
  FetchMyTeamApiRequestDto,
} from "@/my-team/application/dtos/request.dto";
import type {
  EditHoursResponseDto,
  FetchMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";

export interface MyTeamApiPort {
  fetchMyTeam: ({
    teamId,
  }: FetchMyTeamApiRequestDto) => Promise<FetchMyTeamResponseDto>;
  editHours: ({
    teamId,
    hrPerSprint,
  }: EditHoursApiRequestDto) => Promise<EditHoursResponseDto>;
}

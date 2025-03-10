import type {
  EditHoursApiRequestDto,
  GetMyTeamApiRequestDto,
} from "@/my-team/application/dtos/request.dto";
import type {
  EditHoursResponseDto,
  GetMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";

export interface MyTeamApiPort {
  getMyTeam: ({
    teamId,
  }: GetMyTeamApiRequestDto) => Promise<GetMyTeamResponseDto>;
  editHours: ({
    teamId,
    hrPerSprint,
  }: EditHoursApiRequestDto) => Promise<EditHoursResponseDto>;
}

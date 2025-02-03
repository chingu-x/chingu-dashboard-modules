import type {
  EditHoursClientRequestDto,
  GetMyTeamClientRequestDto,
} from "@/my-team/application/dtos/request.dto";
import type {
  EditHoursResponseDto,
  GetMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";

export interface MyTeamClientPort {
  getMyTeam: (
    props: GetMyTeamClientRequestDto,
  ) => Promise<GetMyTeamResponseDto>;
  editHours: (
    props: EditHoursClientRequestDto,
  ) => Promise<EditHoursResponseDto>;
}

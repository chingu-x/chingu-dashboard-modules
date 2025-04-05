import type {
  EditHoursClientRequestDto,
  FetchMyTeamClientRequestDto,
} from "@/my-team/application/dtos/request.dto";
import type {
  EditHoursResponseDto,
  FetchMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";

export interface MyTeamClientPort {
  fetchMyTeam: (
    props: FetchMyTeamClientRequestDto,
  ) => Promise<FetchMyTeamResponseDto>;
  editHours: (
    props: EditHoursClientRequestDto,
  ) => Promise<EditHoursResponseDto>;
}

import { type GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import type {
  GetVoyageTeamIdResponseDto,
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  GetCurrentVoyageUserIdResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { type HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";

export interface VoyageTeamClientPort {
  getCurrentVoyageTeam: (
    props: GetUserRequestDto,
  ) => GetCurrentVoyageTeamResponseDto | undefined;

  getVoyageTeamId: (
    props: GetUserRequestDto,
  ) => GetVoyageTeamIdResponseDto | undefined;

  getCurrentVoyageUserId: (
    props: GetUserRequestDto,
  ) => GetCurrentVoyageUserIdResponseDto | undefined;

  hasVoyageStarted: (
    props: HasVoyageStartedRequestDto,
  ) => HasVoyageStartedResponseDto;
}

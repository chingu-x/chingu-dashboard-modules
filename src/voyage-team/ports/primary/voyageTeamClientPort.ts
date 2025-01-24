import { type GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import type {
  GetCurrentVoyageTeamIdResponseDto,
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { type HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";

export interface VoyageTeamClientPort {
  getCurrentVoyageTeam: (
    user: GetUserRequestDto,
  ) => GetCurrentVoyageTeamResponseDto | undefined;
  getCurrentVoyageTeamId: (
    user: GetUserRequestDto,
  ) => GetCurrentVoyageTeamIdResponseDto | undefined;
  hasVoyageStarted: ({
    isAuthenticated,
    user,
  }: HasVoyageStartedRequestDto) => HasVoyageStartedResponseDto;
}

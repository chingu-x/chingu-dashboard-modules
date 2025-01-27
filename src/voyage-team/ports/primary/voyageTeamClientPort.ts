import { type GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import type {
  GetVoyageTeamIdResponseDto,
  GetUserVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { type HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";

export interface VoyageTeamClientPort {
  getUserVoyageTeam: (
    user: GetUserRequestDto,
  ) => GetUserVoyageTeamResponseDto | undefined;
  getVoyageTeamId: (
    user: GetUserRequestDto,
  ) => GetVoyageTeamIdResponseDto | undefined;
  hasVoyageStarted: ({
    isAuthenticated,
    user,
  }: HasVoyageStartedRequestDto) => HasVoyageStartedResponseDto;
}

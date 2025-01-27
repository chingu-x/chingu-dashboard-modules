import { type GetUserRequestDto } from "@/user/application/dtos/request.dtos";
import type {
  GetUserVoyageTeamIdResponseDto,
  GetUserVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { type HasVoyageStartedRequestDto } from "@/voyage-team/application/dtos/request.dto";

export interface VoyageTeamClientPort {
  getUserVoyageTeam: (
    user: GetUserRequestDto,
  ) => GetUserVoyageTeamResponseDto | undefined;
  getUserVoyageTeamId: (
    user: GetUserRequestDto,
  ) => GetUserVoyageTeamIdResponseDto | undefined;
  hasVoyageStarted: ({
    isAuthenticated,
    user,
  }: HasVoyageStartedRequestDto) => HasVoyageStartedResponseDto;
}

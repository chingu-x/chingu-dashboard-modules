import type {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
  GetActiveTeamsResponseDto,
} from "@/user/application/dtos/response.dto";
import type {
  FetchCurrentUserClientRequestDto,
  GetActiveTeamsClientRequestDto,
  GetChinguMemberStatusClientRequestDto,
} from "@/user/application/dtos/request.dto";

export interface UserClientPort {
  fetchUser: (
    props: FetchCurrentUserClientRequestDto,
  ) => Promise<FetchUserResponseDto>;

  getChinguMemberStatus: (
    props: GetChinguMemberStatusClientRequestDto,
  ) => GetChinguMemberStatusResponseDto;

  getActiveTeams: (
    props: GetActiveTeamsClientRequestDto,
  ) => GetActiveTeamsResponseDto;
}

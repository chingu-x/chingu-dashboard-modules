import type {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
} from "@/user/application/dtos/response.dto";
import type {
  FetchCurrentUserClientRequestDto,
  GetChinguMemberStatusClientRequestDto,
} from "@/user/application/dtos/request.dto";

export interface UserClientPort {
  fetchUser: (
    props: FetchCurrentUserClientRequestDto,
  ) => Promise<FetchUserResponseDto>;

  getChinguMemberStatus: (
    props: GetChinguMemberStatusClientRequestDto,
  ) => GetChinguMemberStatusResponseDto;
}

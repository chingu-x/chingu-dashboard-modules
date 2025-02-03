import type {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
} from "@/user/application/dtos/response.dto";
import type {
  FetchCurrentUserClientRequestDto,
  FetchUserRequestDto,
} from "@/user/application/dtos/request.dtos";

export interface UserClientPort {
  fetchUser: (
    props: FetchCurrentUserClientRequestDto,
  ) => Promise<FetchUserResponseDto>;
  getChinguMemberStatus: (
    props: FetchUserRequestDto,
  ) => GetChinguMemberStatusResponseDto;
}

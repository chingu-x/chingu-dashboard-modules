import type {
  GetChinguMemberStatusResponseDto,
  FetchUserResponseDto,
} from "@/user/application/dtos/response.dto";
import type {
  FetchCurrentUserClientRequesstDto,
  FetchUserRequestDto,
} from "@/user/application/dtos/request.dtos";

export interface UserClientPort {
  fetchUser: (
    props: FetchCurrentUserClientRequesstDto,
  ) => Promise<FetchUserResponseDto>;
  getChinguMemberStatus: (
    props: FetchUserRequestDto,
  ) => GetChinguMemberStatusResponseDto;
}

import { type GetUserRequestDto } from "src/user/application/dtos/request.dtos";
import type {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "src/user/application/dtos/response.dto";

export interface UserClientPort {
  getUser: () => Promise<GetUserResponseDto>;
  getChinguMemberStatus: (
    user: GetUserRequestDto,
  ) => GetChinguMemberStatusResponseDto;
}

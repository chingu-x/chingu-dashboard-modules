import type {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "@/user/application/dtos/response.dto";
import { type GetUserRequestDto } from "@/user/application/dtos/request.dtos";

export interface UserClientPort {
  getUser: () => Promise<GetUserResponseDto>;
  getChinguMemberStatus: (
    user: GetUserRequestDto,
  ) => GetChinguMemberStatusResponseDto;
}

import { type GetUserRequestDto } from "../../application/dtos/request.dtos";
import type {
  GetChinguMemberStatusResponseDto,
  GetUserResponseDto,
} from "../../application/dtos/response.dto";

export interface UserClientPort {
  getUser: () => Promise<GetUserResponseDto>;
  getChinguMemberStatus: (
    user: GetUserRequestDto,
  ) => GetChinguMemberStatusResponseDto;
}

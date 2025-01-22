import { type GetUserResponseDto } from "../../application/dtos/response.dto";

export interface UserApiPort {
  getUser: () => Promise<GetUserResponseDto>;
}

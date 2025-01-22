import { type GetUserResponseDto } from "src/user/application/dtos/response.dto";

export interface UserApiPort {
  getUser: () => Promise<GetUserResponseDto>;
}

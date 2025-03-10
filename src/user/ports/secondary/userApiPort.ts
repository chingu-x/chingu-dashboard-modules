import type { FetchUserResponseDto } from "@/user/application/dtos/response.dto";

export interface UserApiPort {
  fetchUser: () => Promise<FetchUserResponseDto>;
}

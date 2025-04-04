import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import { UserApiPort } from "@/user/ports/secondary/user-api-port";
import { FetchUserResponseDto } from "@/user/application/dtos/response.dto";
import UserUrls from "@/user/application/constants/user-urls";

@injectable()
export class UserApiAdapter implements UserApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchUser(): Promise<FetchUserResponseDto> {
    return await this.apiClient.get({
      url: UserUrls.fetchUser(),
    });
  }
}

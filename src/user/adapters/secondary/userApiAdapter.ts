import { inject, injectable } from "tsyringe";
import { TYPES } from "src/types";
import { type RestApiPort } from "src/rest-api/ports/secondary/restApiPort";
import { type UserApiPort } from "src/user/ports/secondary/userApiPort";
import { type GetUserResponseDto } from "src/user/application/dtos/response.dto";
import UserUrls from "src/user/application/constants/userUrls";

@injectable()
export class UserApiAdapter implements UserApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async getUser(): Promise<GetUserResponseDto> {
    return await this.apiClient.get({
      url: UserUrls.getUser(),
    });
  }
}

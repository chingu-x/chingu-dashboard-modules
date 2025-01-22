import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import UserUrls from "@/user/application/constants/userUrls";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { UserApiPort } from "@/user/ports/secondary/userApiPort";
import { GetUserResponseDto } from "@/user/application/dtos/response.dto";

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

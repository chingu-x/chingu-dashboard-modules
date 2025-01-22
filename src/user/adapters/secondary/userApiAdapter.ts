import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { type RestApiPort } from "../../../rest-api/ports/secondary/restApiPort";
import { type UserApiPort } from "../../ports/secondary/userApiPort";
import { type GetUserResponseDto } from "../../application/dtos/response.dto";
import UserUrls from "../../application/constants/userUrls";

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

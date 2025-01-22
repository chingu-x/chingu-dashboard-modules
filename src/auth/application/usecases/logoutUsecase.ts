import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { type AuthApiPort } from "../../ports/secondary/authApiPort";
import { type LogoutResponseDto } from "../dtos/response.dto";

@injectable()
export class LogoutUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort
  ) {}

  async execute(): Promise<LogoutResponseDto> {
    return await this.authApi.logout();
  }
}

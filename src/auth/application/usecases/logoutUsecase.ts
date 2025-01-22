import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { type AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import { type LogoutResponseDto } from "@/auth/application/dtos/response.dto";

@injectable()
export class LogoutUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(): Promise<LogoutResponseDto> {
    return await this.authApi.logout();
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import { LoginUsecaseDto } from "@/auth/application/dtos/usecase.dto";
import { LoginResponseDto } from "@/auth/application/dtos/response.dto";

@injectable()
export class LoginUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(props: LoginUsecaseDto): Promise<LoginResponseDto> {
    return await this.authApi.login({
      ...props,
    });
  }
}

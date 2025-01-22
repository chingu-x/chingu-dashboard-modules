import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../../types";
import { type AuthApiPort } from "../../ports/secondary/authApiPort";
import { type LoginRequestDto } from "../../application/dtos/request.dto";
import { type LoginResponseDto } from "../../application/dtos/response.dto";

@injectable()
export class LoginUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(props: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.authApi.login({
      ...props,
    });
  }
}

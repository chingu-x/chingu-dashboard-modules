import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { AuthApiPort } from "../../ports/secondary/authApiPort";
import { LoginRequestDto } from "../dtos/request.dto";
import { LoginResponseDto } from "../dtos/response.dto";

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

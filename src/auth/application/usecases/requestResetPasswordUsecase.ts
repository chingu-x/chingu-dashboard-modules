import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { type AuthApiPort } from "../../ports/secondary/authApiPort";
import { type RequestResetPasswordDto } from "../dtos/request.dto";

@injectable()
export class RequestResetPasswordUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort
  ) {}

  async execute(props: RequestResetPasswordDto): Promise<void> {
    return await this.authApi.requestResetPassword({ ...props });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import { RequestResetPasswordDto } from "@/auth/application/dtos/request.dto";

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

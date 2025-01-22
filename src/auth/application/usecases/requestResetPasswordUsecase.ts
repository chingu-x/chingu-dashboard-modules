import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { type AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import { type RequestResetPasswordDto } from "@/auth/application/dtos/request.dto";

@injectable()
export class RequestResetPasswordUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(props: RequestResetPasswordDto): Promise<void> {
    return await this.authApi.requestResetPassword({ ...props });
  }
}

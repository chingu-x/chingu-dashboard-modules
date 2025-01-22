import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { type AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import { type ResetPasswordDto } from "@/auth/application/dtos/request.dto";

@injectable()
export class ResetPasswordUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(props: ResetPasswordDto): Promise<void> {
    return await this.authApi.resetPassword({ ...props });
  }
}

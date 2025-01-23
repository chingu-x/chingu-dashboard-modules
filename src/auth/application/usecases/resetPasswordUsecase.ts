import { inject, injectable } from "tsyringe";
import { TYPES } from "../../../types";
import { AuthApiPort } from "../../ports/secondary/authApiPort";
import { ResetPasswordDto } from "../dtos/request.dto";

@injectable()
export class ResetPasswordUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort
  ) {}

  async execute(props: ResetPasswordDto): Promise<void> {
    return await this.authApi.resetPassword({ ...props });
  }
}

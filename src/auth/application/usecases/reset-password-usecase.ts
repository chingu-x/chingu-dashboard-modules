import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { AuthApiPort } from "@/auth/ports/secondary/auth-api-port";
import { ResetPasswordUsecaseDto } from "@/auth/application/dtos/usecase.dto";
import { ResetPasswordResponseDto } from "@/auth/application/dtos/response.dto";

@injectable()
export class ResetPasswordUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(
    props: ResetPasswordUsecaseDto,
  ): Promise<ResetPasswordResponseDto> {
    return await this.authApi.resetPassword({ ...props });
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { AuthApiPort } from "@/auth/ports/secondary/auth-api-port";
import { RequestResetPasswordUsecaseDto } from "@/auth/application/dtos/usecase.dto";
import { RequestResetPasswordResponseDto } from "@/auth/application/dtos/response.dto";

@injectable()
export class RequestResetPasswordUsecase {
  constructor(
    @inject(TYPES.AuthApiPort)
    private readonly authApi: AuthApiPort,
  ) {}

  async execute(
    props: RequestResetPasswordUsecaseDto,
  ): Promise<RequestResetPasswordResponseDto> {
    return await this.authApi.requestResetPassword({ ...props });
  }
}

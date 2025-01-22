import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { LogoutUsecase } from "@/auth/application/usecases/logoutUsecase";
import { RequestResetPasswordUsecase } from "@/auth/application/usecases/requestResetPasswordUsecase";
import { ResetPasswordUsecase } from "@/auth/application/usecases/resetPasswordUsecase";
import { type AuthClientPort } from "@/auth/ports/primary/authClientPort";
import { type LoginUsecase } from "@/auth/application/usecases/loginUsecase";
import type {
  LoginRequestDto,
  RequestResetPasswordDto,
  ResetPasswordDto,
} from "@/auth/application/dtos/request.dto";
import type {
  LoginResponseDto,
  LogoutResponseDto,
} from "@/auth/application/dtos/response.dto";

@injectable()
export class AuthClientAdapter implements AuthClientPort {
  constructor(
    @inject(TYPES.LoginUsecase)
    private readonly loginUsecase: LoginUsecase,

    @inject(TYPES.LogoutUsecase)
    private readonly logoutUsecase: LogoutUsecase,

    @inject(TYPES.RequestResetPasswordUsecase)
    private readonly requestResetPasswordUsecase: RequestResetPasswordUsecase,

    @inject(TYPES.ResetPasswordUsecase)
    private readonly resetPasswordUsecase: ResetPasswordUsecase,
  ) {}

  async login({ email, password }: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.loginUsecase.execute({ email, password });
  }

  async logout(): Promise<LogoutResponseDto> {
    return await this.logoutUsecase.execute();
  }

  async requestResetPassword({
    email,
  }: RequestResetPasswordDto): Promise<void> {
    return await this.requestResetPasswordUsecase.execute({ email });
  }

  async resetPassword({ password, token }: ResetPasswordDto): Promise<void> {
    return await this.resetPasswordUsecase.execute({ password, token });
  }
}

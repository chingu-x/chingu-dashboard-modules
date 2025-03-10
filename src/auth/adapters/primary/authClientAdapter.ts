import { inject, injectable } from "tsyringe";
import { ResetPasswordUsecase } from "@/auth/application/usecases/resetPasswordUsecase";
import { AuthClientPort } from "@/auth/ports/primary/authClientPort";
import { TYPES } from "@/types";
import { LoginUsecase } from "@/auth/application/usecases/loginUsecase";
import { LogoutUsecase } from "@/auth/application/usecases/logoutUsecase";
import { RequestResetPasswordUsecase } from "@/auth/application/usecases/requestResetPasswordUsecase";
import {
  LoginClientRequestDto,
  RequestResetPasswordClientRequestDto,
  ResetPasswordClientRequestDto,
} from "@/auth/application/dtos/request.dto";
import {
  LoginResponseDto,
  LogoutResponseDto,
  RequestResetPasswordResponseDto,
  ResetPasswordResponseDto,
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

  async login({
    email,
    password,
  }: LoginClientRequestDto): Promise<LoginResponseDto> {
    return await this.loginUsecase.execute({ email, password });
  }

  async logout(): Promise<LogoutResponseDto> {
    return await this.logoutUsecase.execute();
  }

  async requestResetPassword({
    email,
  }: RequestResetPasswordClientRequestDto): Promise<RequestResetPasswordResponseDto> {
    return await this.requestResetPasswordUsecase.execute({ email });
  }

  async resetPassword({
    password,
    token,
  }: ResetPasswordClientRequestDto): Promise<ResetPasswordResponseDto> {
    return await this.resetPasswordUsecase.execute({ password, token });
  }
}

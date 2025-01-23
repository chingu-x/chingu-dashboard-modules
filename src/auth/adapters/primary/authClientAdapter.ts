import { inject, injectable } from "tsyringe";
import { ResetPasswordUsecase } from "../../application/usecases/resetPasswordUsecase";
import { AuthClientPort } from "../../ports/primary/authClientPort";
import { TYPES } from "../../../types";
import { LoginUsecase } from "../../application/usecases/loginUsecase";
import { LogoutUsecase } from "../../application/usecases/logoutUsecase";
import { RequestResetPasswordUsecase } from "../../application/usecases/requestResetPasswordUsecase";
import {
  LoginRequestDto,
  RequestResetPasswordDto,
  ResetPasswordDto,
} from "../../application/dtos/request.dto";
import {
  LoginResponseDto,
  LogoutResponseDto,
} from "../../application/dtos/response.dto";

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

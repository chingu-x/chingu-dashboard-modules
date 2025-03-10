import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { AuthApiPort } from "@/auth/ports/secondary/authApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import {
  LoginApiRequestDto,
  RequestResetPasswordApiRequestDto,
  ResetPasswordApiRequestDto,
} from "@/auth/application/dtos/request.dto";
import AuthUrls from "@/auth/application/constants/authUrls";
import {
  LogoutResponseDto,
  LoginResponseDto,
  RequestResetPasswordResponseDto,
  ResetPasswordResponseDto,
} from "@/auth/application/dtos/response.dto";

@injectable()
export class AuthApiAdapter implements AuthApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async login({
    email,
    password,
  }: LoginApiRequestDto): Promise<LoginResponseDto> {
    return await this.apiClient.post({
      url: AuthUrls.login(),
      payload: { email, password },
    });
  }

  async logout(): Promise<LogoutResponseDto> {
    return await this.apiClient.post({
      url: AuthUrls.logout(),
    });
  }

  async requestResetPassword({
    email,
  }: RequestResetPasswordApiRequestDto): Promise<RequestResetPasswordResponseDto> {
    return await this.apiClient.post({
      url: AuthUrls.requestResetPassword(),
      payload: { email },
    });
  }

  async resetPassword({
    password,
    token,
  }: ResetPasswordApiRequestDto): Promise<ResetPasswordResponseDto> {
    return await this.apiClient.post({
      url: AuthUrls.resetPassword(),
      payload: { password, token },
    });
  }
}

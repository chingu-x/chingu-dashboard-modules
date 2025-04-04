import type {
  LoginApiRequestDto,
  RequestResetPasswordApiRequestDto,
  ResetPasswordApiRequestDto,
} from "@/auth/application/dtos/request.dto";
import type {
  LogoutResponseDto,
  LoginResponseDto,
  RequestResetPasswordResponseDto,
  ResetPasswordResponseDto,
} from "@/auth/application/dtos/response.dto";

export interface AuthApiPort {
  login: ({ email, password }: LoginApiRequestDto) => Promise<LoginResponseDto>;
  logout: () => Promise<LogoutResponseDto>;
  requestResetPassword: ({
    email,
  }: RequestResetPasswordApiRequestDto) => Promise<RequestResetPasswordResponseDto>;
  resetPassword: ({
    password,
    token,
  }: ResetPasswordApiRequestDto) => Promise<ResetPasswordResponseDto>;
}

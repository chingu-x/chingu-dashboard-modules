import type {
  RequestResetPasswordDto,
  LoginRequestDto,
  ResetPasswordDto,
} from "@/auth/application/dtos/request.dto";
import type {
  LogoutResponseDto,
  LoginResponseDto,
} from "@/auth/application/dtos/response.dto";

export interface AuthApiPort {
  login: ({ email, password }: LoginRequestDto) => Promise<LoginResponseDto>;
  logout: () => Promise<LogoutResponseDto>;
  requestResetPassword: ({ email }: RequestResetPasswordDto) => Promise<void>;
  resetPassword: ({ password, token }: ResetPasswordDto) => Promise<void>;
}

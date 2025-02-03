import type {
  LoginClientRequestDto,
  RequestResetPasswordClientRequestDto,
  ResetPasswordClientRequestDto,
} from "@/auth/application/dtos/request.dto";
import type {
  LogoutResponseDto,
  LoginResponseDto,
  RequestResetPasswordResponseDto,
  ResetPasswordResponseDto,
} from "@/auth/application/dtos/response.dto";

export interface AuthClientPort {
  login: (props: LoginClientRequestDto) => Promise<LoginResponseDto>;
  logout: () => Promise<LogoutResponseDto>;
  requestResetPassword: (
    props: RequestResetPasswordClientRequestDto,
  ) => Promise<RequestResetPasswordResponseDto>;
  resetPassword: (
    props: ResetPasswordClientRequestDto,
  ) => Promise<ResetPasswordResponseDto>;
}

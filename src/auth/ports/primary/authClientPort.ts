import type {
  RequestResetPasswordDto,
  LoginRequestDto,
  ResetPasswordDto,
} from "../../application/dtos/request.dto";
import type {
  LogoutResponseDto,
  LoginResponseDto,
} from "../../application/dtos/response.dto";

export interface AuthClientPort {
  login: (props: LoginRequestDto) => Promise<LoginResponseDto>;
  logout: () => Promise<LogoutResponseDto>;
  requestResetPassword: (props: RequestResetPasswordDto) => Promise<void>;
  resetPassword: (props: ResetPasswordDto) => Promise<void>;
}

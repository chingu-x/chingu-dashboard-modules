interface AuthResponse {
  message: string;
}

export type LoginResponseDto = AuthResponse;

export type LogoutResponseDto = AuthResponse;

export type RequestResetPasswordResponseDto = void;

export type ResetPasswordResponseDto = void;

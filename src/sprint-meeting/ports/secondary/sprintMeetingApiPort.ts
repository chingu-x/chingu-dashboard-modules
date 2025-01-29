export interface SprintMeetingApiPort {
  login: ({ email, password }: LoginRequestDto) => Promise<LoginResponseDto>;
  logout: () => Promise<LogoutResponseDto>;
  requestResetPassword: ({ email }: RequestResetPasswordDto) => Promise<void>;
  resetPassword: ({ password, token }: ResetPasswordDto) => Promise<void>;
}

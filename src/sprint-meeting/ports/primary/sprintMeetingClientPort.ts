export interface SprintMeetingClientPort {
  login: (props: LoginRequestDto) => Promise<LoginResponseDto>;
  logout: () => Promise<LogoutResponseDto>;
  requestResetPassword: (props: RequestResetPasswordDto) => Promise<void>;
  resetPassword: (props: ResetPasswordDto) => Promise<void>;
}

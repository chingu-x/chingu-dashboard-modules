import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingClientPort } from "@/sprint-meeting/ports/primary/sprintMeetingClientPort";

@injectable()
export class SprintMeetingClientAdapter implements SprintMeetingClientPort {
  constructor(
    @inject(TYPES.LoginUsecase)
    private readonly loginUsecase: LoginUsecase,

    @inject(TYPES.LogoutUsecase)
    private readonly logoutUsecase: LogoutUsecase,

    @inject(TYPES.RequestResetPasswordUsecase)
    private readonly requestResetPasswordUsecase: RequestResetPasswordUsecase,

    @inject(TYPES.ResetPasswordUsecase)
    private readonly resetPasswordUsecase: ResetPasswordUsecase
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

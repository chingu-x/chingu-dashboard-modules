import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";

@injectable()
export class SprintMeetingApiAdapter implements SprintMeetingApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort
  ) {}

  async login({ email, password }: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.apiClient.post({
      url: AuthUrls.login(),
      payload: { email, password },
    });
  }
}

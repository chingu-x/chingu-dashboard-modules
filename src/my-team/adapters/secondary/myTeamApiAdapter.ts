import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";

@injectable()
export class MyTeamApiAdapter implements MyTeamApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async getMyTeam({
    teamId,
    user,
  }: GetMyTeamRequestDto): Promise<GetMyTeamResponseDto> {
    return await this.apiClient.get({
      url: MyTeamUrls.getMyTeam(),
      payload: { email, password },
    });
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.apiClient.patch({
      url: MyTeamUrls.editHours(),
      payload: { teamId, hrPerSprint },
    });
  }
}

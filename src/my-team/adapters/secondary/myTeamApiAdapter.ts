import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import {
  EditHoursRequestDto,
  GetMyTeamApiRequestDto,
} from "@/my-team/application/dtos/request.dto";
import {
  EditHoursResponseDto,
  GetMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";
import MyTeamUrls from "@/my-team/application/constants/myTeamUrls";

@injectable()
export class MyTeamApiAdapter implements MyTeamApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async getMyTeam({
    teamId,
  }: GetMyTeamApiRequestDto): Promise<GetMyTeamResponseDto> {
    return await this.apiClient.get({
      url: MyTeamUrls.getMyTeam(teamId.toString()),
    });
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.apiClient.patch({
      url: MyTeamUrls.editHours(teamId.toString()),
      payload: { hrPerSprint },
    });
  }
}

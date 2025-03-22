import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import {
  EditHoursApiRequestDto,
  FetchMyTeamApiRequestDto,
} from "@/my-team/application/dtos/request.dto";
import {
  EditHoursResponseDto,
  FetchMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";
import MyTeamUrls from "@/my-team/application/constants/myTeamUrls";

@injectable()
export class MyTeamApiAdapter implements MyTeamApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchMyTeam({
    teamId,
  }: FetchMyTeamApiRequestDto): Promise<FetchMyTeamResponseDto> {
    return await this.apiClient.get({
      url: MyTeamUrls.fetchMyTeam({ teamId }),
    });
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursApiRequestDto): Promise<EditHoursResponseDto> {
    return await this.apiClient.patch({
      url: MyTeamUrls.editHours({ teamId }),
      payload: { hrPerSprint },
    });
  }
}

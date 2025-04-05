import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprints-api-port";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import {
  FetchSprintsApiRequestDto,
  SubmitVoyageProjectApiRequestDto,
  SubmitWeeklyCheckinApiRequestDto,
} from "@/sprints/application/dtos/request.dto";
import {
  FetchAllSprintsResponseDto,
  FetchSprintsResponseDto,
  SubmitVoyageProjectResponseDto,
  SubmitWeeklyCheckinResponseDto,
} from "@/sprints/application/dtos/response.dto";
import SprintsUrls from "@/sprints/application/constants/sprints-urls";

@injectable()
export class SprintsApiAdapter implements SprintsApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchSprints({
    teamId,
  }: FetchSprintsApiRequestDto): Promise<FetchSprintsResponseDto> {
    return await this.apiClient.get({
      url: SprintsUrls.fetchSprints({ teamId }),
    });
  }

  async submitWeeklyCheckin({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinApiRequestDto): Promise<SubmitWeeklyCheckinResponseDto> {
    return await this.apiClient.post({
      url: SprintsUrls.submitWeeklyCheckin(),
      payload: { voyageTeamMemberId, sprintId, responses },
    });
  }

  async submitVoyageProject({
    voyageTeamId,
    responses,
  }: SubmitVoyageProjectApiRequestDto): Promise<SubmitVoyageProjectResponseDto> {
    return await this.apiClient.post({
      url: SprintsUrls.submitVoyageProject(),
      payload: { voyageTeamId, responses },
    });
  }

  async fetchAllSprints(): Promise<FetchAllSprintsResponseDto> {
    return await this.apiClient.get({
      url: SprintsUrls.fetchAllSprints(),
    });
  }
}

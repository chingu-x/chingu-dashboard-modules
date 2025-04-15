import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import {
  AddIdeationApiRequestDto,
  FetchIdeationApiRequestDto,
} from "@/ideation/application/dtos/request.dto";
import {
  AddIdeationResponseDto,
  FetchIdeationResponseDto,
} from "@/ideation/application/dtos/response.dto";
import IdeationUrls from "@/ideation/application/constants/ideation-urls";

@injectable()
export class IdeationApiAdapter implements IdeationApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchIdeation({
    teamId,
  }: FetchIdeationApiRequestDto): Promise<FetchIdeationResponseDto> {
    return await this.apiClient.get({
      url: IdeationUrls.fetchIdeation({ teamId }),
    });
  }

  async addIdeation({
    teamId,
    title,
    description,
    vision,
  }: AddIdeationApiRequestDto): Promise<AddIdeationResponseDto> {
    return await this.apiClient.post({
      url: IdeationUrls.addIdeation({ teamId }),
      payload: { title, description, vision },
    });
  }
}

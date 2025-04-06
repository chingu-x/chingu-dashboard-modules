import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import {
  AddTechStackItemApiRequestDto,
  FetchTechStackApiRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import {
  AddTechStackItemResponseDto,
  FetchTechStackResponseDto,
} from "@/tech-stack/application/dtos/response.dto";
import TechStackUrls from "@/tech-stack/application/constants/tech-stack-urls";

@injectable()
export class TechStackApiAdapter implements TechStackApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchTechStack({
    teamId,
  }: FetchTechStackApiRequestDto): Promise<FetchTechStackResponseDto> {
    return await this.apiClient.get({
      url: TechStackUrls.fetchTechStack({ teamId }),
    });
  }

  async addTechStackItem({
    teamId,
    techName,
    techCategoryId,
    voyageTeamMemberId,
  }: AddTechStackItemApiRequestDto): Promise<AddTechStackItemResponseDto> {
    return await this.apiClient.post({
      url: TechStackUrls.addTechStackItem({ teamId }),
      payload: { techName, techCategoryId, voyageTeamMemberId },
    });
  }
}

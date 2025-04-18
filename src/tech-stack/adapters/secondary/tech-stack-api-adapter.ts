import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import {
  AddTechStackItemApiRequestDto,
  AddTechStackItemVoteApiRequestDto,
  DeleteTechStackItemApiRequestDto,
  EditTechStackItemApiRequestDto,
  FetchTechStackApiRequestDto,
  FinalizeTechStackApiRequestDto,
  RemoveTechStackItemVoteApiRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import {
  AddTechStackItemResponseDto,
  AddTechStackItemVoteResponseDto,
  DeleteTechStackItemResponseDto,
  EditTechStackItemResponseDto,
  FetchTechStackResponseDto,
  FinalizeTechStackResponseDto,
  RemoveTechStackItemVoteResponseDto,
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

  async editTechStackItem({
    teamTechItemId,
    techName,
  }: EditTechStackItemApiRequestDto): Promise<EditTechStackItemResponseDto> {
    return await this.apiClient.patch({
      url: TechStackUrls.editTechStackItem({ teamTechItemId }),
      payload: { techName },
    });
  }

  async deleteTechStackItem({
    teamTechItemId,
  }: DeleteTechStackItemApiRequestDto): Promise<DeleteTechStackItemResponseDto> {
    return await this.apiClient.delete({
      url: TechStackUrls.deleteTechStackItem({ teamTechItemId }),
    });
  }

  async addTechStackItemVote({
    teamTechItemId,
  }: AddTechStackItemVoteApiRequestDto): Promise<AddTechStackItemVoteResponseDto> {
    return await this.apiClient.post({
      url: TechStackUrls.addTechStackItemVote({ teamTechItemId }),
    });
  }

  async removeTechStackItemVote({
    teamTechItemId,
  }: RemoveTechStackItemVoteApiRequestDto): Promise<RemoveTechStackItemVoteResponseDto> {
    return await this.apiClient.delete({
      url: TechStackUrls.addTechStackItemVote({ teamTechItemId }),
    });
  }

  async finalizeTechStack({
    techId,
    isSelected,
  }: FinalizeTechStackApiRequestDto): Promise<FinalizeTechStackResponseDto> {
    return await this.apiClient.patch({
      url: TechStackUrls.finalizeTechStack({ techId }),
      payload: { isSelected },
    });
  }
}

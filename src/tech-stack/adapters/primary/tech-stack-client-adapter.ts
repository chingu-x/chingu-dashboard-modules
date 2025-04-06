import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackClientPort } from "@/tech-stack/ports/primary/tech-stack-client-port";
import {
  AddTechStackItemClientRequestDto,
  FetchTechStackClientRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import {
  AddTechStackItemResponseDto,
  FetchTechStackResponseDto,
} from "@/tech-stack/application/dtos/response.dto";
import { FetchTechStackUsecase } from "@/tech-stack/application/usecases/fetch-tech-stack-usecase";

@injectable()
export class TechStackClientAdapter implements TechStackClientPort {
  constructor(
    @inject(TYPES.FetchTechStackUsecase)
    private readonly fetchTechStackUsecase: FetchTechStackUsecase,

    @inject(TYPES.AddTechStackItemUsecase)
    private readonly addTechStackItemUsecase: AddTechStackItemUsecase,
  ) {}

  async fetchTechStack({
    teamId,
  }: FetchTechStackClientRequestDto): Promise<FetchTechStackResponseDto> {
    return await this.fetchTechStackUsecase.execute({ teamId });
  }

  async addTechStackItem({
    teamId,
    techName,
    techCategoryId,
    voyageTeamMemberId,
  }: AddTechStackItemClientRequestDto): Promise<AddTechStackItemResponseDto> {
    return await this.addTechStackItemUsecase.execute({
      teamId,
      techName,
      techCategoryId,
      voyageTeamMemberId,
    });
  }
}

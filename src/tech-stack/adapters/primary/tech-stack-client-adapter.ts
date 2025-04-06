import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackClientPort } from "@/tech-stack/ports/primary/tech-stack-client-port";
import { FetchTechStackClientRequestDto } from "@/tech-stack/application/dtos/request.dto";
import { FetchTechStackResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class TechStackClientAdapter implements TechStackClientPort {
  constructor(
    @inject(TYPES.FetchTechStackUsecase)
    private readonly fetchTechStackUsecase: FetchTechStackUsecase,
  ) {}

  async fetchTechStack({
    teamId,
  }: FetchTechStackClientRequestDto): Promise<FetchTechStackResponseDto> {
    return await this.fetchTechStackUsecase.execute({ teamId });
  }
}

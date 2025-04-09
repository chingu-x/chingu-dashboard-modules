import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { RemoveTechStackItemVoteUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { RemoveTechStackItemVoteResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class RemoveTechStackItemVoteUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: RemoveTechStackItemVoteUsecaseDto,
  ): Promise<RemoveTechStackItemVoteResponseDto> {
    return await this.techStackApi.removeTechStackItemVote(props);
  }
}

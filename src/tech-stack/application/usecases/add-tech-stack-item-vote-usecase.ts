import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { AddTechStackItemVoteUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { AddTechStackItemVoteResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class AddTechStackItemVoteUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: AddTechStackItemVoteUsecaseDto,
  ): Promise<AddTechStackItemVoteResponseDto> {
    return await this.techStackApi.addTechStackItemVote(props);
  }
}

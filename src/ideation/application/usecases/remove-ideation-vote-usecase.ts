import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { RemoveIdeationVoteUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { RemoveIdeationVoteResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class RemoveIdeationVoteUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(
    props: RemoveIdeationVoteUsecaseDto,
  ): Promise<RemoveIdeationVoteResponseDto> {
    return await this.ideationApi.removeIdeationVote(props);
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { AddIdeationVoteUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { AddIdeationVoteResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class AddIdeationVoteUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(
    props: AddIdeationVoteUsecaseDto,
  ): Promise<AddIdeationVoteResponseDto> {
    return await this.ideationApi.addIdeationVote(props);
  }
}

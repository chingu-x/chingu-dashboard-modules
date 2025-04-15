import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { FinalizeIdeationUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { FinalizeIdeationResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class FinalizeIdeationUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(
    props: FinalizeIdeationUsecaseDto,
  ): Promise<FinalizeIdeationResponseDto> {
    return await this.ideationApi.finalizeIdeation(props);
  }
}

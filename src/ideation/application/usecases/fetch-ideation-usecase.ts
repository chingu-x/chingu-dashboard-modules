import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { FetchIdeationUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { FetchIdeationClientResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class FetchIdeationUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(
    props: FetchIdeationUsecaseDto,
  ): Promise<FetchIdeationClientResponseDto> {
    return await this.ideationApi.fetchIdeation(props);
  }
}

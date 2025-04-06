import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { FetchTechStackUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { FetchTechStackResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class FetchTechStackUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: FetchTechStackUsecaseDto,
  ): Promise<FetchTechStackResponseDto> {
    return await this.techStackApi.fetchTechStack(props);
  }
}

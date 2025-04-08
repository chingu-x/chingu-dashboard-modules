import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { FinalizeTechStackUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { FinalizeTechStackResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class FinalizeTechStackUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: FinalizeTechStackUsecaseDto,
  ): Promise<FinalizeTechStackResponseDto> {
    return await this.techStackApi.finalizeTechStack(props);
  }
}

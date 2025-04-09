import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { AddTechStackItemUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { AddTechStackItemResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class AddTechStackItemUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: AddTechStackItemUsecaseDto,
  ): Promise<AddTechStackItemResponseDto> {
    return await this.techStackApi.addTechStackItem(props);
  }
}

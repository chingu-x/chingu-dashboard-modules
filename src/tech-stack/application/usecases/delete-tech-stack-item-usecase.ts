import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { DeleteTechStackItemUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { DeleteTechStackItemResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class DeleteTechStackItemUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: DeleteTechStackItemUsecaseDto,
  ): Promise<DeleteTechStackItemResponseDto> {
    return await this.techStackApi.deleteTechStackItem(props);
  }
}

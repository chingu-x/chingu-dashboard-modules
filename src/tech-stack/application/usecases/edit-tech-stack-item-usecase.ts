import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import { EditTechStackItemUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { EditTechStackItemResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class EditTechStackItemUsecase {
  constructor(
    @inject(TYPES.TechStackApiPort)
    private readonly techStackApi: TechStackApiPort,
  ) {}

  async execute(
    props: EditTechStackItemUsecaseDto,
  ): Promise<EditTechStackItemResponseDto> {
    return await this.techStackApi.editTechStackItem(props);
  }
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { AddIdeationUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { AddIdeationResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class AddIdeationUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(props: AddIdeationUsecaseDto): Promise<AddIdeationResponseDto> {
    return await this.ideationApi.addIdeation(props);
  }
}

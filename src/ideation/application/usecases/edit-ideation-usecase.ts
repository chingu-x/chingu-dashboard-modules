import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { EditIdeationUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { EditIdeationResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class EditIdeationUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(
    props: EditIdeationUsecaseDto,
  ): Promise<EditIdeationResponseDto> {
    return await this.ideationApi.editIdeation(props);
  }
}

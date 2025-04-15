import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import { DeleteIdeationUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { DeleteIdeationResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class DeleteIdeationUsecase {
  constructor(
    @inject(TYPES.IdeationApiPort)
    private readonly ideationApi: IdeationApiPort,
  ) {}

  async execute(
    props: DeleteIdeationUsecaseDto,
  ): Promise<DeleteIdeationResponseDto> {
    return await this.ideationApi.deleteIdeation(props);
  }
}

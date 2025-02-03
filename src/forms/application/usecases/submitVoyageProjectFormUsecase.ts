import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import { createFormResponseBody } from "@/forms/application/utils/createFormResponseBody";
import { SubmitVoyageProjectFormResponseDto } from "@/forms/application/dtos/response.dto";
import { SubmitVoyageProjectFormUsecaseDto } from "@/forms/application/dtos/usecase.dto";

@injectable()
export class SubmitVoyageProjectFormUsecase {
  constructor(
    @inject(TYPES.FormsApiPort)
    private readonly formsApi: FormsApiPort,
  ) {}

  async execute({
    voyageTeamId,
    data,
    questions,
  }: SubmitVoyageProjectFormUsecaseDto): Promise<SubmitVoyageProjectFormResponseDto> {
    const responses = createFormResponseBody({ data, questions });

    return await this.formsApi.submitVoyageProjectForm({
      voyageTeamId,
      responses,
    });
  }
}

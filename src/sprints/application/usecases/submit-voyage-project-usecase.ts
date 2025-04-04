import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprints-api-port";
import { SubmitVoyageProjectUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { SubmitVoyageProjectResponseDto } from "@/sprints/application/dtos/response.dto";
import { createFormResponseBody } from "@/forms/application/utils/create-form-response-body";

@injectable()
export class SubmitVoyageProjectUsecase {
  constructor(
    @inject(TYPES.SprintsApiPort)
    private readonly sprintsApi: SprintsApiPort,
  ) {}

  async execute({
    voyageTeamId,
    data,
    questions,
  }: SubmitVoyageProjectUsecaseDto): Promise<SubmitVoyageProjectResponseDto> {
    const responses = createFormResponseBody({ data, questions });

    return await this.sprintsApi.submitVoyageProject({
      voyageTeamId,
      responses,
    });
  }
}

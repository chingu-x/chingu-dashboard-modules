import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprintsApiPort";
import { FetchSprintsUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { FetchSprintsResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class FetchSprintsUsecase {
  constructor(
    @inject(TYPES.SprintsApiPort)
    private readonly sprintsApi: SprintsApiPort,
  ) {}

  async execute({
    teamId,
  }: FetchSprintsUsecaseDto): Promise<FetchSprintsResponseDto> {
    return await this.sprintsApi.fetchSprints({ teamId });
  }
}

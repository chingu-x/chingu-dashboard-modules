import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprints-api-port";
import { FetchAllSprintsResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class FetchAllSprintsUsecase {
  constructor(
    @inject(TYPES.SprintsApiPort)
    private readonly sprintsApi: SprintsApiPort,
  ) {}

  async execute(): Promise<FetchAllSprintsResponseDto> {
    return await this.sprintsApi.fetchAllSprints();
  }
}

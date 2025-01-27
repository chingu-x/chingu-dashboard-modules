import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprintsApiPort";
import { FetchSprintsClientRequestDto } from "@/sprints/application/dtos/request.dto";
import { FetchSprintsResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class FetchSprintsUsecase {
  constructor(
    @inject(TYPES.SprintsApiPort)
    private readonly sprintsApi: SprintsApiPort,
  ) {}

  async execute({
    teamId,
  }: FetchSprintsClientRequestDto): Promise<FetchSprintsResponseDto> {
    const numberTeamId = Number(teamId);

    return await this.sprintsApi.fetchSprints({ teamId: numberTeamId });
  }
}

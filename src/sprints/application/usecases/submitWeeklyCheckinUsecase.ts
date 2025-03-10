import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { createFormResponseBody } from "@/forms/application/utils/createFormResponseBody";
import { SprintsApiPort } from "@/sprints/ports/secondary/sprintsApiPort";
import { SubmitWeeklyCheckinUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { SubmitWeeklyCheckinResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class SubmitWeeklyCheckinUsecase {
  constructor(
    @inject(TYPES.SprintsApiPort)
    private readonly sprintsApi: SprintsApiPort,
  ) {}

  async execute({
    voyageTeamMemberId,
    sprintId,
    data,
    questions,
  }: SubmitWeeklyCheckinUsecaseDto): Promise<SubmitWeeklyCheckinResponseDto> {
    const responses = createFormResponseBody({ data, questions });

    return await this.sprintsApi.submitWeeklyCheckin({
      voyageTeamMemberId,
      sprintId,
      responses,
    });
  }
}

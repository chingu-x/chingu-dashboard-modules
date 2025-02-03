import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import { SubmitWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { createFormResponseBody } from "@/forms/application/utils/createFormResponseBody";
import { SubmitWeeklyCheckinFormUsecaseDto } from "@/forms/application/dtos/usecase.dto";

@injectable()
export class SubmitWeeklyCheckinFormUsecase {
  constructor(
    @inject(TYPES.FormsApiPort)
    private readonly formsApi: FormsApiPort,
  ) {}

  async execute({
    voyageTeamMemberId,
    sprintId,
    data,
    questions,
  }: SubmitWeeklyCheckinFormUsecaseDto): Promise<SubmitWeeklyCheckinFormResponseDto> {
    const responses = createFormResponseBody({ data, questions });

    return await this.formsApi.submitWeeklyCheckinForm({
      voyageTeamMemberId,
      sprintId,
      responses,
    });
  }
}

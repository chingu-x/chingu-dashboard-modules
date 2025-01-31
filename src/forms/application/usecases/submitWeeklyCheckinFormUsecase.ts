import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import { SubmitWeeklyCheckinFormClientRequestDto } from "@/forms/application/dtos/request.dto";
import { SubmitWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { createFormResponseBody } from "@/forms/application/utils/createFormResponseBody";

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
  }: SubmitWeeklyCheckinFormClientRequestDto): Promise<SubmitWeeklyCheckinFormResponseDto> {
    const responses = createFormResponseBody({ data, questions });

    return await this.formsApi.submitWeeklyCheckinForm({
      voyageTeamMemberId,
      sprintId,
      responses,
    });
  }
}

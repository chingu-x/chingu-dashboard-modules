import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import { SubmitWeeklyCheckinFormRequestDto } from "@/forms/application/dtos/request.dto";
import { SubmitWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";

@injectable()
export class SubmitWeeklyCheckinFormUsecase {
  constructor(
    @inject(TYPES.FormsApiPort)
    private readonly formsApi: FormsApiPort
  ) {}

  async execute({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinFormRequestDto): Promise<SubmitWeeklyCheckinFormResponseDto> {
    return await this.formsApi.fetchFormQuestions({
      ...props,
    });
  }
}

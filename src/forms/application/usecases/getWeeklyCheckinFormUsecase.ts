import { injectable } from "tsyringe";
import { GetWeeklyCheckinFormRequestDto } from "@/forms/application/dtos/request.dto";
import { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { FormsClientPort } from "@/forms/ports/primary/formsClientPort";

@injectable()
export class GetWeeklyCheckinFormUsecase {
  constructor(private readonly formsClient: FormsClientPort) {}
  async execute({
    formId,
    voyageTeamRoles,
    currentUserVoyageRole,
  }: GetWeeklyCheckinFormRequestDto): Promise<GetWeeklyCheckinFormResponseDto> {
    const checkinForm = this.formsClient.fetchFormQuestions({ formId });
  }
}

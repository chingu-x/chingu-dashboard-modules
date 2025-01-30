import { injectable } from "tsyringe";
import { GetWeeklyCheckinFormRequestDto } from "@/forms/application/dtos/request.dto";
import { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { FormsClientPort } from "@/forms/ports/primary/formsClientPort";
import { Forms, Question } from "@/forms/application/types";

@injectable()
export class GetWeeklyCheckinFormUsecase {
  constructor(private readonly formsClient: FormsClientPort) {}

  async execute({
    voyageTeamRoles,
    currentUserVoyageRole,
  }: GetWeeklyCheckinFormRequestDto): Promise<GetWeeklyCheckinFormResponseDto> {
    let questions = [] as Question[];

    const checkinForm = await this.formsClient.fetchFormQuestions({
      formId: Forms.checkIn,
    });

    if (
      voyageTeamRoles.hasProductOwner &&
      !currentUserVoyageRole.isProductOwner
    ) {
      const POForm = await this.formsClient.fetchFormQuestions({
        formId: Forms.checkinPO,
      });

      if (POForm && POForm.questions) {
        questions = [...questions, ...POForm.questions];
      }
    }

    if (
      voyageTeamRoles.hasScrumMaster &&
      !currentUserVoyageRole.isScrumMaster
    ) {
      const SMForm = await this.formsClient.fetchFormQuestions({
        formId: Forms.checkinSM,
      });

      if (SMForm && SMForm.questions) {
        questions = [...questions, ...SMForm.questions];
      }
    }

    questions = questions.sort((a, b) => a.order - b.order);

    return {
      ...checkinForm,
      ...questions,
    };
  }
}

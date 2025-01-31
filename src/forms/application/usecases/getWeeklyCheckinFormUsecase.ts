import { injectable } from "tsyringe";
import { GetWeeklyCheckinFormApiRequestDto } from "@/forms/application/dtos/request.dto";
import { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { Forms, Question } from "@/forms/application/types";

@injectable()
export class GetWeeklyCheckinFormUsecase {
  async execute({
    fetchFormQuestions,
    voyageTeamRoles,
    currentUserVoyageRole,
  }: GetWeeklyCheckinFormApiRequestDto): Promise<GetWeeklyCheckinFormResponseDto> {
    let questions = [] as Question[];

    const checkinForm = await fetchFormQuestions({
      formId: Forms.checkIn,
    });

    if (
      voyageTeamRoles.hasProductOwner &&
      !currentUserVoyageRole.isProductOwner
    ) {
      const POForm = await fetchFormQuestions({
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
      const SMForm = await fetchFormQuestions({
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

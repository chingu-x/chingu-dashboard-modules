import { injectable } from "tsyringe";
import { GetWeeklyCheckinFormApiRequestDto } from "@/forms/application/dtos/request.dto";
import { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { Forms } from "@/forms/application/types";

@injectable()
export class GetWeeklyCheckinFormUsecase {
  async execute({
    fetchFormQuestions,
    voyageTeamRoles,
    currentUserVoyageRole,
  }: GetWeeklyCheckinFormApiRequestDto): Promise<GetWeeklyCheckinFormResponseDto> {
    const checkinForm = await fetchFormQuestions({
      formId: Forms.checkIn,
    });

    let questions = [...(checkinForm.questions || [])];

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
      questions,
    };
  }
}

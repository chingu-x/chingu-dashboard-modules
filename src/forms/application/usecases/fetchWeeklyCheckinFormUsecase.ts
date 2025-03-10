import { injectable } from "tsyringe";
import { FetchWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";
import { Forms } from "@/forms/application/types";
import { FetchWeeklyCheckinFormUsecaseDto } from "@/forms/application/dtos/usecase.dto";

@injectable()
export class FetchWeeklyCheckinFormUsecase {
  async execute({
    fetchFormQuestions,
    voyageTeamRoles,
    currentUserVoyageRole,
  }: FetchWeeklyCheckinFormUsecaseDto): Promise<FetchWeeklyCheckinFormResponseDto> {
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

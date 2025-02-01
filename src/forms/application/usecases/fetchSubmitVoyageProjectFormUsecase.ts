import { injectable } from "tsyringe";
import { Forms } from "@/forms/application/types";
import { FetchSubmitVoyageProjectFormResponseDto } from "@/forms/application/dtos/response.dto";

@injectable()
export class FetchSubmitVoyageProjectFormUsecase {
  async execute({
    fetchFormQuestions,
  }: FetchSubmitVoyageProjectFormApiRequestDto): Promise<FetchSubmitVoyageProjectFormResponseDto> {
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

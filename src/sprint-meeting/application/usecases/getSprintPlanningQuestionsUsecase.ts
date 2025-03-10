import { injectable } from "tsyringe";
import { GetSprintPlanningQuestionsUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetSprintPlanningQuestionsResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { Forms, PlanningQuestions } from "@/forms/application/types";

@injectable()
export class GetSprintPlanningQuestionsUsecase {
  execute({
    meeting,
  }: GetSprintPlanningQuestionsUsecaseDto): GetSprintPlanningQuestionsResponseDto {
    const planningQuestions = {
      goal: "",
      timeline: "",
    };

    const responses = meeting.formResponseMeeting?.find(
      (form) => form.form.id === Number(Forms.planning),
    );

    if (responses) {
      planningQuestions.goal =
        responses.responseGroup.responses.find(
          (response) => response.question.id === Number(PlanningQuestions.goal),
        )?.text ?? "";
      planningQuestions.timeline =
        responses.responseGroup.responses.find(
          (response) =>
            response.question.id === Number(PlanningQuestions.timeline),
        )?.text ?? "";
    }

    return planningQuestions;
  }
}

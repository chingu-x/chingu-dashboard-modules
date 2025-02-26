import { injectable } from "tsyringe";
import { GetSprintReviewQuestionsResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { GetSprintReviewQuestionsUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { Forms, ReviewQuestions } from "@/forms/application/types";

@injectable()
export class GetSprintReviewQuestionsUsecase {
  execute({
    meeting,
  }: GetSprintReviewQuestionsUsecaseDto): GetSprintReviewQuestionsResponseDto {
    const reviewQuestions = {
      what_right: "",
      what_to_improve: "",
      what_to_change: "",
    };

    const responses = meeting.formResponseMeeting?.find(
      (form) => form.form.id === Number(Forms.review),
    );

    if (responses) {
      reviewQuestions.what_right = responses.responseGroup.responses.find(
        (response) =>
          response.question.id === Number(ReviewQuestions.what_right),
      )!.text;

      reviewQuestions.what_to_improve = responses.responseGroup.responses.find(
        (response) =>
          response.question.id === Number(ReviewQuestions.what_to_improve),
      )!.text;

      reviewQuestions.what_to_change = responses.responseGroup.responses.find(
        (response) =>
          response.question.id === Number(ReviewQuestions.what_to_change),
      )!.text;
    }

    return reviewQuestions;
  }
}

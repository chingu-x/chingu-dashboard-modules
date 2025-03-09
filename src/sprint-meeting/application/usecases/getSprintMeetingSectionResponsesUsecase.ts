import { injectable } from "tsyringe";
import { GetSprintMeetingSectionResponsesUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetSprintMeetingSectionResponsesResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetSprintMeetingSectionResponsesUsecase {
  execute({
    sprintMeetingForm,
  }: GetSprintMeetingSectionResponsesUsecaseDto): GetSprintMeetingSectionResponsesResponseDto {
    const responses = sprintMeetingForm.questions.map((question) => ({
      question: {
        id: question.id,
      },
      text: "",
    }));

    return { responses };
  }
}

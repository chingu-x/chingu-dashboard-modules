import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprint-meeting-api-port";
import { EditSprintMeetingSectionUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { EditSprintMeetingSectionResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { Forms, ReviewQuestions } from "@/forms/application/types";

@injectable()
export class EditSprintReviewSectionUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    data,
  }: EditSprintMeetingSectionUsecaseDto): Promise<EditSprintMeetingSectionResponseDto> {
    type ResponseType = { questionId: number; text: string }[];
    const responses = [] as ResponseType;

    for (const [key, value] of Object.entries(data)) {
      const question = key as keyof typeof ReviewQuestions;
      const questionId: number = ReviewQuestions[question];
      const text = value as string;
      const response = {
        questionId,
        text,
      };
      responses.push(response);
    }

    const formId = Number(Forms.review);

    return await this.sprintMeetingApi.editSprintMeetingSection({
      meetingId,
      formId,
      responses,
    });
  }
}

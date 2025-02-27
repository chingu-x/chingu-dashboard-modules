import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { EditSprintMeetingSectionUsecaseDto } from "../dtos/usecase.dto";
import { EditSprintMeetingSectionResponseDto } from "../dtos/response.dto";
import { ReviewQuestions } from "@/forms/application/types";

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

    return await this.sprintMeetingApi.editSprintReviewSection(payload);
  }
}

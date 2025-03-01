import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { Forms, PlanningQuestions } from "@/forms/application/types";
import { EditSprintPlanningSectionUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { EditSprintMeetingSectionResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class EditSprintPlanningSectionUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    data,
  }: EditSprintPlanningSectionUsecaseDto): Promise<EditSprintMeetingSectionResponseDto> {
    type ResponseType = { questionId: number; text: string }[];
    const responses = [] as ResponseType;

    for (const [key, value] of Object.entries(data)) {
      const question = key as keyof typeof PlanningQuestions;
      const questionId: number = PlanningQuestions[question];
      const text = value as string;
      const response = {
        questionId,
        text,
      };
      responses.push(response);
    }

    const formId = Number(Forms.planning);

    return await this.sprintMeetingApi.editSprintMeetingSection({
      meetingId,
      formId,
      responses,
    });
  }
}

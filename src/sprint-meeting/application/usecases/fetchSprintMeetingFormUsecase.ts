import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { FetchSprintMeetingFormUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { FetchSprintMeetingFormResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class FetchSprintMeetingFormUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    formId,
  }: FetchSprintMeetingFormUsecaseDto): Promise<FetchSprintMeetingFormResponseDto> {
    return await this.sprintMeetingApi.fetchSprintMeetingForm({
      meetingId,
      formId,
    });
  }
}

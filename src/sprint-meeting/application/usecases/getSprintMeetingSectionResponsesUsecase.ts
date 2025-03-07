import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { GetSprintMeetingSectionResponsesUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetSprintMeetingSectionResponsesResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetSprintMeetingSectionResponsesUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    getSprintMeetingSectionResponses,
    meetingId,
    formId,
  }: GetSprintMeetingSectionResponsesUsecaseDto): Promise<GetSprintMeetingSectionResponsesResponseDto> {
    const data = await this.sprintMeetingApi.fetchMeeting({ meetingId });

    const formResponseMeeting = data.formResponseMeeting!.find(
      (meeting) => meeting.form.id === formId,
    );

    const responses = formResponseMeeting!.responseGroup.responses.map(
      (response) => ({
        question: {
          id: response.question.id,
        },
        text: response.text,
      }),
    );

    return { responses };
  }
}

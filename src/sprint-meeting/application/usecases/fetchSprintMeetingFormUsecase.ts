import { inject, injectable } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";

@injectable()
export class FetchSprintMeetingFormUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    formId,
  }: FetchSprintMeetingFormUsecaseDto): Promise<FetchSprintMeetingSectionResponsesResponseDto> {
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

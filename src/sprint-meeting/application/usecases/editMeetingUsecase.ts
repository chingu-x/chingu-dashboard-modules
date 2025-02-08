import { inject, injectable } from "tsyringe";
import { format } from "date-fns-tz";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { EditMeetingUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { EditMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { MeetingFormData } from "@/sprint-meeting/application/types";

@injectable()
export class EditMeetingUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    meetingId,
    timezone,
    ...data
  }: EditMeetingUsecaseDto): Promise<EditMeetingResponseDto> {
    const dateTime = format(data.dateTime!, "yyyy-MM-dd HH:mm:ssXXX", {
      timeZone: timezone,
    });

    let newData: Partial<MeetingFormData>;

    if (data.meetingLink === "") {
      newData = {
        description: data.description,
        title: data.title,
      };
    } else {
      newData = {
        description: data.description,
        title: data.title,
        meetingLink: data.meetingLink,
      };
    }

    const payload = {
      ...newData,
      meetingId,
      dateTime,
    };

    return await this.sprintMeetingApi.editMeeting(payload);
  }
}

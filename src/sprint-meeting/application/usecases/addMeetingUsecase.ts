import { inject, injectable } from "tsyringe";
import { format } from "date-fns-tz";
import { SPRINT_MEETING_TYPES } from "@/sprint-meeting/di/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { AddMeetingClientRequestDto } from "@/sprint-meeting/application/dtos/request.dto";
import { AddMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { MeetingFormData } from "@/sprint-meeting/application/types";

@injectable()
export class AddMeetingUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.SprintMeetingApiPort)
    private readonly sprintMeetingApi: SprintMeetingApiPort,
  ) {}

  async execute({
    data,
    teamId,
    sprintNumber,
    timezone,
  }: AddMeetingClientRequestDto): Promise<AddMeetingResponseDto> {
    const dateTime = format(data.dateTime, "yyyy-MM-dd HH:mm:ssXXX", {
      timeZone: timezone,
    });

    let newData: Omit<MeetingFormData, "dateTime">;

    if (data.meetingLink) {
      newData = {
        description: data.description,
        title: data.title,
        meetingLink: "",
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
      dateTime,
      teamId,
      sprintNumber,
    };
  }
}

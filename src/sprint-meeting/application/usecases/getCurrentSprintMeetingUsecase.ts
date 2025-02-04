import { injectable } from "tsyringe";
import { GetCurrentSprintMeetingUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetCurrentSprintMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintMeetingUsecase {
  execute({
    meeting,
    meetingId,
  }: GetCurrentSprintMeetingUsecaseDto):
    | GetCurrentSprintMeetingResponseDto
    | undefined {
    return meeting.find((meeting) => meeting.id === Number(meetingId));
  }
}

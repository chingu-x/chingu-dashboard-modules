import { injectable } from "tsyringe";
import { GetSprintMeetingUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetSprintMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetSprintMeetingUsecase {
  execute({
    meeting,
    meetingId,
  }: GetSprintMeetingUsecaseDto): GetSprintMeetingResponseDto | undefined {
    return meeting.find((meeting) => meeting.id === Number(meetingId));
  }
}

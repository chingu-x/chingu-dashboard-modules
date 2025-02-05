import { injectable } from "tsyringe";
import { GetSprintMeetingIdUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetSprintMeetingIdResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetSprintMeetingIdUsecase {
  execute({
    meeting,
    sprintNumber,
  }: GetSprintMeetingIdUsecaseDto): GetSprintMeetingIdResponseDto {
    return meeting.find((meeting) => meeting.sprint?.number === sprintNumber)
      ?.id;
  }
}

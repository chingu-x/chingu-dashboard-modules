import { injectable } from "tsyringe";
import { GetCurrentSprintMeetingIdRequesDto } from "@/sprint-meeting/application/dtos/request.dto";
import { GetCurrentSprintMeetingIdResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintMeetingIdUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetCurrentSprintMeetingIdRequesDto): GetCurrentSprintMeetingIdResponseDto {
    return sprints.find((sprint) => sprint.number === sprintNumber)!
      .teamMeetings[0];
  }
}

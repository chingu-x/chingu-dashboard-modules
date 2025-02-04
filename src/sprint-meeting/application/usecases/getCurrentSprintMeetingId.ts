import { injectable } from "tsyringe";
import { GetCurrentSprintMeetingIdUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetCurrentSprintMeetingIdResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintMeetingIdUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetCurrentSprintMeetingIdUsecaseDto): GetCurrentSprintMeetingIdResponseDto {
    return sprints.find((sprint) => sprint.number === sprintNumber)!
      .teamMeetings[0];
  }
}

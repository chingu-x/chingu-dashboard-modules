import { injectable } from "tsyringe";
import { GetCurrentSprintMeetingIdRequesDto } from "../dtos/request.dto";
import { GetCurrentSprintMeetingIdResponseDto } from "../dtos/response.dto";

@injectable()
export class GetCurrentSprintMeetingIdUsecase {
  async execute({
    sprints,
  }: GetCurrentSprintMeetingIdRequesDto): GetCurrentSprintMeetingIdResponseDto {
    return sprints.find((sprint) => sprint.number === sprintNumber)!
      .teamMeetings[0];
  }
}

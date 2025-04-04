import { injectable } from "tsyringe";
import { GetSprintMeetingIdUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetSprintMeetingIdResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetSprintMeetingIdUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetSprintMeetingIdUsecaseDto): GetSprintMeetingIdResponseDto {
    return sprints.find((sprint) => sprint.number === sprintNumber)
      ?.teamMeetings[0];
  }
}

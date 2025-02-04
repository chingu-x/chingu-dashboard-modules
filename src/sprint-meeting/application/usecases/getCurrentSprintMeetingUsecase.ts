import { injectable } from "tsyringe";
import { GetCurrentSprintMeetingUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetCurrentSprintMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintMeetingUsecase {
  execute({
    sprints,
    meetingId,
  }: GetCurrentSprintMeetingUsecaseDto):
    | GetCurrentSprintMeetingResponseDto
    | undefined {
    return sprints.find(
      (sprint) =>
        sprint.teamMeetingsData &&
        sprint.teamMeetingsData[0].id === Number(meetingId),
    );
  }
}

import { injectable } from "tsyringe";
import { GetCurrentSprintMeetingRequestDto } from "@/sprint-meeting/application/dtos/request.dto";
import { GetCurrentSprintMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetCurrentSprintMeetingUsecase {
  execute({
    sprints,
    meetingId,
  }: GetCurrentSprintMeetingRequestDto):
    | GetCurrentSprintMeetingResponseDto
    | undefined {
    return sprints.find(
      (sprint) =>
        sprint.teamMeetingsData &&
        sprint.teamMeetingsData[0].id === Number(meetingId),
    );
  }
}

import { injectable } from "tsyringe";
import { GetMeetingRequestDto } from "@/sprints/application/dtos/request.dto";
import { GetMeetingResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetMeetingUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetMeetingRequestDto): GetMeetingResponseDto | null {
    const sprint = sprints.find((sprint) => sprint.number === sprintNumber);

    if (sprint?.teamMeetingsData && sprint?.teamMeetingsData.length > 0)
      return sprint.teamMeetingsData[0];
    return null;
  }
}

import { injectable } from "tsyringe";
import { GetMeetingUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { GetMeetingResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class GetMeetingUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetMeetingUsecaseDto): GetMeetingResponseDto | null {
    const sprint = sprints.find((sprint) => sprint.number === sprintNumber);

    if (sprint?.teamMeetingsData && sprint?.teamMeetingsData.length > 0)
      return sprint.teamMeetingsData[0];
    return null;
  }
}

import { injectable } from "tsyringe";
import { GetSprintByNumberClientRequestDto } from "src/sprints/application/dtos/request.dto";
import { GetSprintByNumberResponseDto } from "src/sprints/application/dtos/response.dto";

@injectable()
export class GetSprintByNumberUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetSprintByNumberClientRequestDto): GetSprintByNumberResponseDto {
    return sprints.find((sprint) => sprint.number === Number(sprintNumber))!;
  }
}

import { injectable } from "tsyringe";
import { GetSprintByNumberResponseDto } from "@/sprints/application/dtos/response.dto";
import { GetSprintByNumberUsecaseDto } from "@/sprints/application/dtos/usecase.dto";

@injectable()
export class GetSprintByNumberUsecase {
  execute({
    sprints,
    sprintNumber,
  }: GetSprintByNumberUsecaseDto): GetSprintByNumberResponseDto {
    return sprints.find((sprint) => sprint.number === Number(sprintNumber))!;
  }
}

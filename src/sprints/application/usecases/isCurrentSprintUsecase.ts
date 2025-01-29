import { injectable } from "tsyringe";
import { IsCurrentSprintApiRequestDto } from "@/sprints/application/dtos/request.dto";
import { IsCurrentSprintResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class IsCurrentSprintUsecase {
  execute({
    number,
    sprintNumber,
  }: IsCurrentSprintApiRequestDto): IsCurrentSprintResponseDto {
    return number === sprintNumber;
  }
}

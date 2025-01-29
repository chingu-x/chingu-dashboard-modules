import { injectable } from "tsyringe";
import { IsCurrentSprintRequestDto } from "@/sprints/application/dtos/request.dto";
import { IsCurrentSprintResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class IsCurrentSprintUsecase {
  execute({
    sprintNumber,
    currentSprintNumber,
  }: IsCurrentSprintRequestDto): IsCurrentSprintResponseDto {
    return sprintNumber === currentSprintNumber.toString();
  }
}

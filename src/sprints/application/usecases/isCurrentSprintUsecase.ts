import { injectable } from "tsyringe";
import { IsCurrentSprintUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { IsCurrentSprintResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class IsCurrentSprintUsecase {
  execute({
    sprintNumber,
    currentSprintNumber,
  }: IsCurrentSprintUsecaseDto): IsCurrentSprintResponseDto {
    return sprintNumber === currentSprintNumber.toString();
  }
}

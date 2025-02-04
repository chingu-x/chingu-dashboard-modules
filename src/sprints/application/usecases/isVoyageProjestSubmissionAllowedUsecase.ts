import { injectable } from "tsyringe";
import { IsVoyageProjestSubmissionAllowedUsecaseDto } from "@/sprints/application/dtos/usecase.dto";
import { IsVoyageProjestSubmissionAllowedResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class IsVoyageProjestSubmissionAllowedUsecase {
  execute({
    sprintNumber,
  }: IsVoyageProjestSubmissionAllowedUsecaseDto): IsVoyageProjestSubmissionAllowedResponseDto {
    return sprintNumber === "5" || sprintNumber === "6";
  }
}

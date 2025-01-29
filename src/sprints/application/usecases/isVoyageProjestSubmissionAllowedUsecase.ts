import { injectable } from "tsyringe";
import { IsVoyageProjestSubmissionAllowedRequestDto } from "@/sprints/application/dtos/request.dto";
import { IsVoyageProjestSubmissionAllowedResponseDto } from "@/sprints/application/dtos/response.dto";

@injectable()
export class IsVoyageProjestSubmissionAllowedUsecase {
  execute({
    sprintNumber,
  }: IsVoyageProjestSubmissionAllowedRequestDto): IsVoyageProjestSubmissionAllowedResponseDto {
    return sprintNumber === "5" || sprintNumber === "6";
  }
}

import { injectable } from "tsyringe";
import { GetVoyageProjectSubmissionStatusResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetVoyageProjectSubmissionStatusUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";

@injectable()
export class GetVoyageProjectSubmissionStatusUsecase {
  execute({
    currentVoyageTeam,
  }: GetVoyageProjectSubmissionStatusUsecaseDto):
    | GetVoyageProjectSubmissionStatusResponseDto
    | undefined {
    return currentVoyageTeam?.voyageTeam.projectSubmitted;
  }
}

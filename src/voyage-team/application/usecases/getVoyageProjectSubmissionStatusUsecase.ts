import { injectable } from "tsyringe";
import { GetVoyageProjectSubmissionStatusResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetVoyageProjectSubmissionStatusUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";

@injectable()
export class GetVoyageProjectSubmissionStatusUsecase {
  execute({
    currentVoyageTeam,
    teamId,
  }: GetVoyageProjectSubmissionStatusUsecaseDto): GetVoyageProjectSubmissionStatusResponseDto {
    const currentTeam = currentVoyageTeam.find(
      (team) => team.voyageTeamId === Number(teamId),
    );

    return currentTeam?.voyageTeam.projectSubmitted ?? false;
  }
}

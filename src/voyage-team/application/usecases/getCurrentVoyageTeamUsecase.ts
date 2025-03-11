// gets the current voyage team

import { injectable } from "tsyringe";
import { isWithinInterval } from "date-fns";
import { GetCurrentVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentVoyageTeamUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";

@injectable()
export class GetCurrentVoyageTeamUsecase {
  execute({
    user,
    sprints,
    currentDate,
  }: GetCurrentVoyageTeamUsecaseDto): GetCurrentVoyageTeamResponseDto {
    const activeTeams = user.voyageTeamMembers.filter(
      (voyage) => voyage.voyageTeam.voyage.status.name === "Active",
    );

    const teams = sprints.find((sprint) =>
      isWithinInterval(currentDate, {
        start: sprint.startDate,
        end: sprint.endDate,
      }),
    );

    return (
      activeTeams.filter(
        (team) => team.voyageTeam.voyage.number === teams?.number,
      ) ?? []
    );
  }
}

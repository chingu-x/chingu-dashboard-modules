// gets the current voyage team

import { injectable } from "tsyringe";
import { GetCurrentVoyageTeamResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentVoyageTeamUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";

@injectable()
export class GetCurrentVoyageTeamUsecase {
  execute({
    user,
  }: GetCurrentVoyageTeamUsecaseDto):
    | GetCurrentVoyageTeamResponseDto
    | undefined {
    return user.voyageTeamMembers.find(
      (voyage) => voyage.voyageTeam.voyage.status.name === "Active",
    );
  }
}

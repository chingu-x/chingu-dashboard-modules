import { injectable } from "tsyringe";
import { GetCurrentUserVoyageRoleResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentUserVoyageRoleUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";
import { UserRole } from "@/forms/application/types";

@injectable()
export class GetCurrentUserVoyageRoleUsecase {
  execute({
    currentVoyageTeam,
    teamId,
  }: GetCurrentUserVoyageRoleUsecaseDto): GetCurrentUserVoyageRoleResponseDto {
    const userRole = currentVoyageTeam.find(
      (team) => team.voyageTeamId === Number(teamId),
    )?.voyageRole.name;

    const isScrumMaster = userRole === UserRole.scrumMaster.toString();

    const isProductOwner = userRole === UserRole.productOwner.toString();

    return {
      isScrumMaster,
      isProductOwner,
    };
  }
}

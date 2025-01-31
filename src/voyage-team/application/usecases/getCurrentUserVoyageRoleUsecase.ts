import { injectable } from "tsyringe";
import { GetCurrentUserVoyageRoleResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentUserVoyageRoleApiRequestDto } from "@/voyage-team/application/dtos/request.dto";
import { UserRole } from "@/forms/application/types";

@injectable()
export class GetCurrentUserVoyageRoleUsecase {
  execute({
    voyageTeam,
    voyageMemberId,
  }: GetCurrentUserVoyageRoleApiRequestDto):
    | GetCurrentUserVoyageRoleResponseDto
    | undefined {
    const userRole = voyageTeam.voyageTeamMembers.find(
      (member) => member.id === voyageMemberId,
    )?.voyageRole.name;

    const isScrumMaster = userRole === UserRole.scrumMaster.toString();

    const isProductOwner = userRole === UserRole.productOwner.toString();

    return {
      isScrumMaster,
      isProductOwner,
    };
  }
}

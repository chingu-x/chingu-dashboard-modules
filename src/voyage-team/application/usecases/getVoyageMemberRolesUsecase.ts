import { injectable } from "tsyringe";
import { GetVoyageMemberRolesRequestDto } from "@/voyage-team/application/dtos/request.dto";
import { GetVoyageMemberRolesResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { UserRole } from "@/forms/application/types";

@injectable()
export class GetVoyageMemberRolesUsecase {
  execute({
    voyageTeam,
  }: GetVoyageMemberRolesRequestDto): GetVoyageMemberRolesResponseDto {
    const hasScrumMaster = Boolean(
      voyageTeam.voyageTeamMembers.find(
        (member) => member.voyageRole.name === UserRole.scrumMaster.toString(),
      ),
    );

    const hasProductOwner = Boolean(
      voyageTeam.voyageTeamMembers.find(
        (member) => member.voyageRole.name === UserRole.productOwner.toString(),
      ),
    );

    return {
      hasScrumMaster,
      hasProductOwner,
    };
  }
}

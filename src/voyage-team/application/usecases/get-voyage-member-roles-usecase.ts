import { injectable } from "tsyringe";
import { GetVoyageMemberRolesUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";
import { GetVoyageMemberRolesResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { UserRole } from "@/forms/application/types";

@injectable()
export class GetVoyageMemberRolesUsecase {
  execute({
    voyageTeam,
  }: GetVoyageMemberRolesUsecaseDto): GetVoyageMemberRolesResponseDto {
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

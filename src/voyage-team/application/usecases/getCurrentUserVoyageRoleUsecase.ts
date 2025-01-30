import { injectable } from "tsyringe";
import { GetCurrentUserVoyageRoleResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentUserVoyageRoleApiRequestDto } from "@/voyage-team/application/dtos/request.dto";

@injectable()
export class GetCurrentUserVoyageRoleUsecase {
  execute({
    voyageTeam,
    voyageMemberId,
  }: GetCurrentUserVoyageRoleApiRequestDto):
    | GetCurrentUserVoyageRoleResponseDto
    | undefined {
    return voyageTeam.voyageTeamMembers.find(
      (member) => member.id === voyageMemberId
    )?.voyageRole.name;
  }
}

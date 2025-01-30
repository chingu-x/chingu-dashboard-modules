import { injectable } from "tsyringe";
import { GetCurrentUserVoyageRoleResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentUserVoyageRoleApiRequestDto } from "@/voyage-team/application/dtos/request.dto";

@injectable()
export class GetCurrentUserVoyageRoleUsecase {
  execute(
    props: GetCurrentUserVoyageRoleApiRequestDto
  ): GetCurrentUserVoyageRoleResponseDto {
    return props.voyageTeamMembers.find(
      (voyage) => voyage.voyageTeam.voyage.status.name === "Active"
    );
  }
}

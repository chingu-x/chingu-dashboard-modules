// Get the ID of the voyage team in current voyage

import { injectable } from "tsyringe";
import { GetVoyageTeamIdResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetVoyageTeamIdRequestDto } from "@/voyage-team/application/dtos/request.dto";

@injectable()
export class GetVoyageTeamIdUsecase {
  execute(
    props: GetVoyageTeamIdRequestDto | undefined,
  ): GetVoyageTeamIdResponseDto | undefined {
    return props?.voyageTeamId.toString();
  }
}

import { injectable } from "tsyringe";
import { GetWeeklyCheckinFormRequestDto } from "@/forms/application/dtos/request.dto";
import { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";

@injectable()
export class GetWeeklyCheckinFormUsecase {
  async execute({
    voyageTeamRoles,
    currentUserVoyageRole,
  }: GetWeeklyCheckinFormRequestDto): Promise<GetWeeklyCheckinFormResponseDto> {}
}

import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamClientPort } from "@/my-team/ports/primary/myTeamClientPort";

@injectable()
export class MyTeamClientAdapter implements MyTeamClientPort {
  constructor(
    @inject(TYPES.GetMyTeamUsecase)
    private readonly getMyTeamUsecase: GetMyTeamUsecase,

    @inject(TYPES.EditHoursUsecase)
    private readonly editHoursUsecase: EditHoursUsecase,
  ) {}

  async getMyTeam({
    teamId,
    user,
  }: GetMyTeamRequestDto): Promise<GetMyTeamResponseDto> {
    return await this.getMyTeamUsecase.execute({ teamId, user });
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.editHoursUsecase.execute({ teamId, hrPerSprint });
  }
}

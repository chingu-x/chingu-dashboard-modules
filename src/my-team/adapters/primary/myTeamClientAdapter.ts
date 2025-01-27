import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamClientPort } from "@/my-team/ports/primary/myTeamClientPort";
import {
  EditHoursRequestDto,
  GetMyTeamClientRequestDto,
} from "@/my-team/application/dtos/request.dto";
import {
  EditHoursResponseDto,
  GetMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";
import { GetMyTeamUsecase } from "@/my-team/application/usecases/getMyTeamUsecase";
import { EditHoursUsecase } from "@/my-team/application/usecases/editHoursUsecase";

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
  }: GetMyTeamClientRequestDto): Promise<GetMyTeamResponseDto> {
    return await this.getMyTeamUsecase.execute({ teamId, user });
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.editHoursUsecase.execute({ teamId, hrPerSprint });
  }
}

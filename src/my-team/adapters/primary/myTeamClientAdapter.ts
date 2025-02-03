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
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";

@injectable()
export class MyTeamClientAdapter implements MyTeamClientPort {
  constructor(
    @inject(TYPES.GetMyTeamUsecase)
    private readonly getMyTeamUsecase: GetMyTeamUsecase,

    @inject(TYPES.EditHoursUsecase)
    private readonly editHoursUsecase: EditHoursUsecase,

    @inject(TYPES.UpdateDirectoryWithCurrentTimeUsecase)
    private readonly updateDirectoryWithCurrentTimeUsecase: UpdateDirectoryWithCurrentTimeUsecase,
  ) {}

  async getMyTeam({
    teamId,
    user,
  }: GetMyTeamClientRequestDto): Promise<GetMyTeamResponseDto> {
    const data = await this.getMyTeamUsecase.execute({ teamId, user });
    return this.updateDirectoryWithCurrentTimeUsecase.execute({
      data,
    }) as unknown as Promise<GetMyTeamResponseDto>;
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.editHoursUsecase.execute({ teamId, hrPerSprint });
  }
}

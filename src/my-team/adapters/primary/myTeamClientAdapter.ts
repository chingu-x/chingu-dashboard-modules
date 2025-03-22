import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamClientPort } from "@/my-team/ports/primary/myTeamClientPort";
import {
  EditHoursClientRequestDto,
  FetchMyTeamClientRequestDto,
} from "@/my-team/application/dtos/request.dto";
import {
  EditHoursResponseDto,
  FetchMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";
import { FetchMyTeamUsecase } from "@/my-team/application/usecases/fetchMyTeamUsecase";
import { EditHoursUsecase } from "@/my-team/application/usecases/editHoursUsecase";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";

@injectable()
export class MyTeamClientAdapter implements MyTeamClientPort {
  constructor(
    @inject(TYPES.FetchMyTeamUsecase)
    private readonly fetchMyTeamUsecase: FetchMyTeamUsecase,

    @inject(TYPES.EditHoursUsecase)
    private readonly editHoursUsecase: EditHoursUsecase,

    @inject(TYPES.UpdateDirectoryWithCurrentTimeUsecase)
    private readonly updateDirectoryWithCurrentTimeUsecase: UpdateDirectoryWithCurrentTimeUsecase,
  ) {}

  async fetchMyTeam({
    teamId,
    user,
  }: FetchMyTeamClientRequestDto): Promise<FetchMyTeamResponseDto> {
    const data = await this.fetchMyTeamUsecase.execute({ teamId, user });

    this.updateDirectoryWithCurrentTimeUsecase.execute({
      data,
    });

    return data;
  }

  async editHours({
    teamId,
    hrPerSprint,
  }: EditHoursClientRequestDto): Promise<EditHoursResponseDto> {
    return await this.editHoursUsecase.execute({ teamId, hrPerSprint });
  }
}

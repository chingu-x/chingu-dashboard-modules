import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { MyTeamClientPort } from "@/my-team/ports/primary/my-team-client-port";
import {
  EditHoursClientRequestDto,
  FetchMyTeamClientRequestDto,
} from "@/my-team/application/dtos/request.dto";
import {
  EditHoursResponseDto,
  FetchMyTeamResponseDto,
} from "@/my-team/application/dtos/response.dto";
import { FetchMyTeamUsecase } from "@/my-team/application/usecases/fetch-my-team-usecase";
import { EditHoursUsecase } from "@/my-team/application/usecases/edit-hours-usecase";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/update-directory-with-current-time-usecase";

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

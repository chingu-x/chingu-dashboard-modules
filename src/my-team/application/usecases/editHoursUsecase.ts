import { inject, injectable } from "tsyringe";
import { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import { EditHoursResponseDto } from "@/my-team/application/dtos/response.dto";
import { My_TEAM_TYPES } from "@/my-team/di/types";
import { EditHoursUsecaseDto } from "@/my-team/application/dtos/usecase.dto";

@injectable()
export class EditHoursUsecase {
  constructor(
    @inject(My_TEAM_TYPES.MyTeamApiPort)
    private readonly myTeamApi: MyTeamApiPort,
  ) {}

  async execute(props: EditHoursUsecaseDto): Promise<EditHoursResponseDto> {
    return await this.myTeamApi.editHours({ ...props });
  }
}

import { inject, injectable } from "tsyringe";
import { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import { EditHoursRequestDto } from "@/my-team/application/dtos/request.dto";
import { EditHoursResponseDto } from "@/my-team/application/dtos/response.dto";
import { MyTeam_TYPES } from "@/my-team/di/types";

@injectable()
export class EditHoursUsecase {
  constructor(
    @inject(MyTeam_TYPES.MyTeamApiPort)
    private readonly myTeamApi: MyTeamApiPort,
  ) {}

  async execute(props: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.myTeamApi.editHours({ ...props });
  }
}

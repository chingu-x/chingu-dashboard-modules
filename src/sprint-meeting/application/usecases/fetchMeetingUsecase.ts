import { inject, injectable } from "tsyringe";

@injectable()
export class FetchMeetingUsecase {
  constructor(
    @inject(SPRINT_MEETING_TYPES.MyTeamApiPort)
    private readonly myTeamApi: MyTeamApiPort
  ) {}

  async execute(props: EditHoursRequestDto): Promise<EditHoursResponseDto> {
    return await this.myTeamApi.editHours({ ...props });
  }
}

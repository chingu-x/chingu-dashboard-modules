import { inject, injectable } from "tsyringe";
import { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import { moveElementToFirst } from "@/my-team/application/utils/moveElementToFirst";
import { GetMyTeamUsecaseDto } from "@/my-team/application/dtos/usecase.dto";
import { GetMyTeamResponseDto } from "@/my-team/application/dtos/response.dto";
import { CurrentVoyageTeamMember } from "@/voyage-team/application/types";
import { My_TEAM_TYPES } from "@/my-team/di/types";

@injectable()
export class GetMyTeamUsecase {
  constructor(
    @inject(My_TEAM_TYPES.MyTeamApiPort)
    private readonly myTeamApi: MyTeamApiPort,
  ) {}

  async execute({
    teamId,
    user,
  }: GetMyTeamUsecaseDto): Promise<GetMyTeamResponseDto> {
    const data = await this.myTeamApi.getMyTeam({
      teamId,
    });

    const teamMembers: CurrentVoyageTeamMember[] = data.voyageTeamMembers;
    const userDiscordId = user?.oAuthProfiles.find(
      (profile) => profile.provider.name === "discord",
    )?.providerUsername;

    const elementToSort = teamMembers.find(
      (element) =>
        element.member.oAuthProfiles.find(
          (profile) => profile.provider.name === "discord",
        )?.providerUsername === userDiscordId,
    );

    moveElementToFirst(teamMembers, elementToSort);

    return data;
  }
}

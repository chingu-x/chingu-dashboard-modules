import { inject, injectable } from "tsyringe";
import { MyTeamApiPort } from "@/my-team/ports/secondary/my-team-api-port";
import { moveElementToFirst } from "@/my-team/application/utils/move-element-to-first";
import { FetchMyTeamUsecaseDto } from "@/my-team/application/dtos/usecase.dto";
import { FetchMyTeamResponseDto } from "@/my-team/application/dtos/response.dto";
import { CurrentVoyageTeamMember } from "@/voyage-team/application/types";
import { My_TEAM_TYPES } from "@/my-team/di/types";

@injectable()
export class FetchMyTeamUsecase {
  constructor(
    @inject(My_TEAM_TYPES.MyTeamApiPort)
    private readonly myTeamApi: MyTeamApiPort,
  ) {}

  async execute({
    teamId,
    user,
  }: FetchMyTeamUsecaseDto): Promise<FetchMyTeamResponseDto> {
    const data = await this.myTeamApi.fetchMyTeam({
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

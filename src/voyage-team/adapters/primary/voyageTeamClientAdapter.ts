import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import {
  GetVoyageTeamIdResponseDto,
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  IsCurrentVoyageTeamResponseDto,
  GetCurrentVoyageUserIdResponseDto,
  GetVoyageProjectSubmissionStatusResponseDto,
  GetVoyageMemberRolesResponseDto,
  GetCurrentUserVoyageRoleResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import { GetVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getVoyageTeamIdUsecase";
import {
  GetCurrentUserVoyageRoleClientRequestDto,
  GetCurrentVoyageTeamClientRequestDto,
  GetCurrentVoyageUserIdClientRequestDto,
  GetVoyageMemberRolesClientRequestDto,
  GetVoyageProjectSubmissionStatusClientRequestDto,
  GetVoyageTeamIdClientRequestDto,
  HasVoyageStartedClientRequestDto,
  IsCurrentVoyageTeamClientRequestDto,
} from "@/voyage-team/application/dtos/request.dto";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";
import { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageUserIdUsecase";
import { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/getVoyageProjectSubmissionStatusUsecase";
import { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/getVoyageMemberRolesUsecase";
import { GetCurrentUserVoyageRoleUsecase } from "@/voyage-team/application/usecases/getCurrentUserVoyageRoleUsecase";

@injectable()
export class VoyageTeamClientAdapter implements VoyageTeamClientPort {
  constructor(
    @inject(TYPES.GetCurrentVoyageTeamUsecase)
    private readonly getCurrentVoyageTeamUsecase: GetCurrentVoyageTeamUsecase,

    @inject(TYPES.GetVoyageTeamIdUsecase)
    private readonly getVoyageTeamIdUsecase: GetVoyageTeamIdUsecase,

    @inject(TYPES.GetCurrentVoyageUserIdUsecase)
    private readonly getCurrentVoyageUserIdUsecase: GetCurrentVoyageUserIdUsecase,

    @inject(TYPES.HasVoyageStartedUsecase)
    private readonly hasVoyageStartedUsecase: HasVoyageStartedUsecase,

    @inject(TYPES.IsCurrentVoyageTeamUsecase)
    private readonly isCurrentVoyageTeamUsecase: IsCurrentVoyageTeamUsecase,

    @inject(TYPES.GetVoyageProjectSubmissionStatusUsecase)
    private readonly getVoyageProjectSubmissionStatusUsecase: GetVoyageProjectSubmissionStatusUsecase,

    @inject(TYPES.GetVoyageMemberRolesUsecase)
    private readonly getVoyageMemberRolesUsecase: GetVoyageMemberRolesUsecase,

    @inject(TYPES.GetCurrentUserVoyageRoleUsecase)
    private readonly getCurrentUserVoyageRoleUsecase: GetCurrentUserVoyageRoleUsecase,
  ) {}

  // gets the current voyage team
  getCurrentVoyageTeam({
    user,
    sprints,
    currentDate,
  }: GetCurrentVoyageTeamClientRequestDto): GetCurrentVoyageTeamResponseDto {
    return this.getCurrentVoyageTeamUsecase.execute({
      user,
      sprints,
      currentDate,
    });
  }

  // Get the ID of the voyage team in current voyage
  getVoyageTeamId({
    user,
  }: GetVoyageTeamIdClientRequestDto): GetVoyageTeamIdResponseDto | undefined {
    const userVoyageTeam = this.getCurrentVoyageTeam({ user })!;

    return this.getVoyageTeamIdUsecase.execute({ userVoyageTeam });
  }

  // get the user's id in the current voyage
  getCurrentVoyageUserId({
    user,
  }: GetCurrentVoyageUserIdClientRequestDto):
    | GetCurrentVoyageUserIdResponseDto
    | undefined {
    const userVoyageTeam = this.getCurrentVoyageTeam({ user })!;
    return this.getCurrentVoyageUserIdUsecase.execute({ userVoyageTeam });
  }

  hasVoyageStarted({
    isAuthenticated,
    user,
  }: HasVoyageStartedClientRequestDto): HasVoyageStartedResponseDto {
    return this.hasVoyageStartedUsecase.execute({ isAuthenticated, user });
  }

  // returns true / false whether the coyage team id is the id of the voyage team belonging to the current user
  isCurrentVoyageTeam({
    user,
    teamId,
  }: IsCurrentVoyageTeamClientRequestDto): IsCurrentVoyageTeamResponseDto {
    const voyageTeamId = this.getVoyageTeamId({ user })!;
    return this.isCurrentVoyageTeamUsecase.execute({ teamId, voyageTeamId });
  }

  getVoyageProjectSubmissionStatus({
    user,
  }: GetVoyageProjectSubmissionStatusClientRequestDto):
    | GetVoyageProjectSubmissionStatusResponseDto
    | undefined {
    const currentVoyageTeam = this.getCurrentVoyageTeam({ user })!;

    return this.getVoyageProjectSubmissionStatusUsecase.execute({
      currentVoyageTeam,
    });
  }

  // gets voyage roles from the members in the current voyage team
  getVoyageMemberRoles({
    voyageTeam,
  }: GetVoyageMemberRolesClientRequestDto): GetVoyageMemberRolesResponseDto {
    return this.getVoyageMemberRolesUsecase.execute({ voyageTeam });
  }

  getCurrentUserVoyageRole({
    user,
    voyageTeam,
  }: GetCurrentUserVoyageRoleClientRequestDto):
    | GetCurrentUserVoyageRoleResponseDto
    | undefined {
    const voyageMemberId = this.getCurrentVoyageUserId({ user });

    return this.getCurrentUserVoyageRoleUsecase.execute({
      voyageTeam,
      voyageMemberId,
    });
  }
}

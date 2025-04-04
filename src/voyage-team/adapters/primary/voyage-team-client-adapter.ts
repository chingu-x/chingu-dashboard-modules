import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyage-team-client-port";
import {
  GetCurrentVoyageTeamResponseDto,
  HasVoyageStartedResponseDto,
  IsCurrentVoyageTeamResponseDto,
  GetCurrentVoyageUserIdResponseDto,
  GetVoyageProjectSubmissionStatusResponseDto,
  GetVoyageMemberRolesResponseDto,
  GetCurrentUserVoyageRoleResponseDto,
} from "@/voyage-team/application/dtos/response.dto";
import { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/get-current-voyage-team-usecase";
import {
  GetCurrentUserVoyageRoleClientRequestDto,
  GetCurrentVoyageTeamClientRequestDto,
  GetCurrentVoyageUserIdClientRequestDto,
  GetVoyageMemberRolesClientRequestDto,
  GetVoyageProjectSubmissionStatusClientRequestDto,
  HasVoyageStartedClientRequestDto,
  IsCurrentVoyageTeamClientRequestDto,
} from "@/voyage-team/application/dtos/request.dto";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/has-voyage-started-usecase";
import { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/is-current-voyage-team-usecase";
import { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/get-current-voyage-user-id-usecase";
import { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/get-voyage-project-submission-status-usecase";
import { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/get-voyage-member-roles-usecase";
import { GetCurrentUserVoyageRoleUsecase } from "@/voyage-team/application/usecases/get-current-user-voyage-role-usecase";

@injectable()
export class VoyageTeamClientAdapter implements VoyageTeamClientPort {
  constructor(
    @inject(TYPES.GetCurrentVoyageTeamUsecase)
    private readonly getCurrentVoyageTeamUsecase: GetCurrentVoyageTeamUsecase,

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

  // get the user's id in the current voyage
  getCurrentVoyageUserId({
    currentVoyageTeam,
    teamId,
  }: GetCurrentVoyageUserIdClientRequestDto): GetCurrentVoyageUserIdResponseDto {
    return this.getCurrentVoyageUserIdUsecase.execute({
      currentVoyageTeam,
      teamId,
    });
  }

  hasVoyageStarted({
    isAuthenticated,
    user,
  }: HasVoyageStartedClientRequestDto): HasVoyageStartedResponseDto {
    return this.hasVoyageStartedUsecase.execute({ isAuthenticated, user });
  }

  // returns true / false whether the coyage team id is the id of the voyage team belonging to the current user
  isCurrentVoyageTeam({
    currentVoyageTeam,
    teamId,
  }: IsCurrentVoyageTeamClientRequestDto): IsCurrentVoyageTeamResponseDto {
    return this.isCurrentVoyageTeamUsecase.execute({
      teamId,
      currentVoyageTeam,
    });
  }

  getVoyageProjectSubmissionStatus({
    currentVoyageTeam,
    teamId,
  }: GetVoyageProjectSubmissionStatusClientRequestDto): GetVoyageProjectSubmissionStatusResponseDto {
    return this.getVoyageProjectSubmissionStatusUsecase.execute({
      currentVoyageTeam,
      teamId,
    });
  }

  // gets voyage roles from the members in the current voyage team
  getVoyageMemberRoles({
    voyageTeam,
  }: GetVoyageMemberRolesClientRequestDto): GetVoyageMemberRolesResponseDto {
    return this.getVoyageMemberRolesUsecase.execute({ voyageTeam });
  }

  getCurrentUserVoyageRole({
    currentVoyageTeam,
    teamId,
  }: GetCurrentUserVoyageRoleClientRequestDto): GetCurrentUserVoyageRoleResponseDto {
    return this.getCurrentUserVoyageRoleUsecase.execute({
      currentVoyageTeam,
      teamId,
    });
  }
}

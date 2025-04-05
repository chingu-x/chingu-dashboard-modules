import { container } from "tsyringe";
import { VOYAGE_TEAM_TYPES } from "./types";
import { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyage-team-client-adapter";
import { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/get-current-voyage-team-usecase";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/has-voyage-started-usecase";
import { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/is-current-voyage-team-usecase";
import { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/get-current-voyage-user-id-usecase";
import { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/get-voyage-project-submission-status-usecase";
import { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/get-voyage-member-roles-usecase";
import { GetCurrentUserVoyageRoleUsecase } from "@/voyage-team/application/usecases/get-current-user-voyage-role-usecase";

export const registerVoyageTeamDependencies = () => {
  // ports

  // usecases
  container.register(VOYAGE_TEAM_TYPES.GetCurrentVoyageTeamUsecase, {
    useClass: GetCurrentVoyageTeamUsecase,
  });

  container.register(VOYAGE_TEAM_TYPES.GetCurrentVoyageUserIdUsecase, {
    useClass: GetCurrentVoyageUserIdUsecase,
  });

  container.register(VOYAGE_TEAM_TYPES.HasVoyageStartedUsecase, {
    useClass: HasVoyageStartedUsecase,
  });

  container.register(VOYAGE_TEAM_TYPES.IsCurrentVoyageTeamUsecase, {
    useClass: IsCurrentVoyageTeamUsecase,
  });

  container.register(
    VOYAGE_TEAM_TYPES.GetVoyageProjectSubmissionStatusUsecase,
    {
      useClass: GetVoyageProjectSubmissionStatusUsecase,
    },
  );

  container.register(VOYAGE_TEAM_TYPES.GetVoyageMemberRolesUsecase, {
    useClass: GetVoyageMemberRolesUsecase,
  });

  container.register(VOYAGE_TEAM_TYPES.GetCurrentUserVoyageRoleUsecase, {
    useClass: GetCurrentUserVoyageRoleUsecase,
  });

  // adapters
  container.register(VOYAGE_TEAM_TYPES.VoyageTeamClientAdapter, {
    useClass: VoyageTeamClientAdapter,
  });
};

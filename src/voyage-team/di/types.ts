import type { InjectionToken } from "tsyringe";
import type { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyage-team-client-adapter";
import type { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/get-current-voyage-team-usecase";
import type { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/has-voyage-started-usecase";
import type { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/is-current-voyage-team-usecase";
import type { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/get-current-voyage-user-id-usecase";
import type { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/get-voyage-project-submission-status-usecase";
import type { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/get-voyage-member-roles-usecase";
import type { GetCurrentUserVoyageRoleUsecase } from "@/voyage-team/application/usecases/get-current-user-voyage-role-usecase";

export const VOYAGE_TEAM_TYPES = {
  // ports

  // usecases
  GetCurrentVoyageTeamUsecase: Symbol.for(
    "GetCurrentVoyageTeamUsecase",
  ) as InjectionToken<GetCurrentVoyageTeamUsecase>,

  GetCurrentVoyageUserIdUsecase: Symbol.for(
    "GetCurrentVoyageUserIdUsecase",
  ) as InjectionToken<GetCurrentVoyageUserIdUsecase>,

  HasVoyageStartedUsecase: Symbol.for(
    "HasVoyageStartedUsecase",
  ) as InjectionToken<HasVoyageStartedUsecase>,

  IsCurrentVoyageTeamUsecase: Symbol.for(
    "IsCurrentVoyageTeamUsecase",
  ) as InjectionToken<IsCurrentVoyageTeamUsecase>,

  GetVoyageProjectSubmissionStatusUsecase: Symbol.for(
    "GetVoyageProjectSubmissionStatusUsecase",
  ) as InjectionToken<GetVoyageProjectSubmissionStatusUsecase>,

  GetVoyageMemberRolesUsecase: Symbol.for(
    "GetVoyageMemberRolesUsecase",
  ) as InjectionToken<GetVoyageMemberRolesUsecase>,

  GetCurrentUserVoyageRoleUsecase: Symbol.for(
    "GetCurrentUserVoyageRoleUsecase",
  ) as InjectionToken<GetCurrentUserVoyageRoleUsecase>,

  // adapters
  VoyageTeamClientAdapter: Symbol.for(
    "VoyageTeamClientAdapter",
  ) as InjectionToken<VoyageTeamClientAdapter>,
};

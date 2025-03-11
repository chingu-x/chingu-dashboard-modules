import type { InjectionToken } from "tsyringe";
import type { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import type { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import type { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import type { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";
import type { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageUserIdUsecase";
import type { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/getVoyageProjectSubmissionStatusUsecase";
import type { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/getVoyageMemberRolesUsecase";
import type { GetCurrentUserVoyageRoleUsecase } from "@/voyage-team/application/usecases/getCurrentUserVoyageRoleUsecase";

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

import type { InjectionToken } from "tsyringe";
import type { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import type { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import type { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import type { GetVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getVoyageTeamIdUsecase";
import type { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import type { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";
import type { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageUserIdUsecase";
import type { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/getVoyageProjectSubmissionStatusUsecase";
import type { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/getVoyageMemberRolesUsecase";

export const VOYAGE_TEAM_TYPES = {
  VoyageTeamClientPort: Symbol.for(
    "VoyageTeamClientPort"
  ) as InjectionToken<VoyageTeamClientPort>,

  VoyageTeamClientAdapter: Symbol.for(
    "VoyageTeamClientAdapter"
  ) as InjectionToken<VoyageTeamClientAdapter>,

  GetCurrentVoyageTeamUsecase: Symbol.for(
    "GetCurrentVoyageTeamUsecase"
  ) as InjectionToken<GetCurrentVoyageTeamUsecase>,

  GetVoyageTeamIdUsecase: Symbol.for(
    "GetVoyageTeamIdUsecase"
  ) as InjectionToken<GetVoyageTeamIdUsecase>,

  GetCurrentVoyageUserIdUsecase: Symbol.for(
    "GetCurrentVoyageUserIdUsecase"
  ) as InjectionToken<GetCurrentVoyageUserIdUsecase>,

  HasVoyageStartedUsecase: Symbol.for(
    "HasVoyageStartedUsecase"
  ) as InjectionToken<HasVoyageStartedUsecase>,

  IsCurrentVoyageTeamUsecase: Symbol.for(
    "IsCurrentVoyageTeamUsecase"
  ) as InjectionToken<IsCurrentVoyageTeamUsecase>,

  GetVoyageProjectSubmissionStatusUsecase: Symbol.for(
    "GetVoyageProjectSubmissionStatusUsecase"
  ) as InjectionToken<GetVoyageProjectSubmissionStatusUsecase>,

  GetVoyageMemberRolesUsecase: Symbol.for(
    "GetVoyageMemberRolesUsecase"
  ) as InjectionToken<GetVoyageMemberRolesUsecase>,
};

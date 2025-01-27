import type { InjectionToken } from "tsyringe";
import type { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import type { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import type { GetUserVoyageTeamUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamUsecase";
import type { GetVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getVoyageTeamIdUsecase";
import type { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import type { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";

export const VOYAGE_TEAM_TYPES = {
  VoyageTeamClientPort: Symbol.for(
    "VoyageTeamClientPort",
  ) as InjectionToken<VoyageTeamClientPort>,
  VoyageTeamClientAdapter: Symbol.for(
    "VoyageTeamClientAdapter",
  ) as InjectionToken<VoyageTeamClientAdapter>,
  GetUserVoyageTeamUsecase: Symbol.for(
    "GetUserVoyageTeamUsecase",
  ) as InjectionToken<GetUserVoyageTeamUsecase>,
  GetVoyageTeamIdUsecase: Symbol.for(
    "GetVoyageTeamIdUsecase",
  ) as InjectionToken<GetVoyageTeamIdUsecase>,
  HasVoyageStartedUsecase: Symbol.for(
    "HasVoyageStartedUsecase",
  ) as InjectionToken<HasVoyageStartedUsecase>,
  IsCurrentVoyageTeamUsecase: Symbol.for(
    "IsCurrentVoyageTeamUsecase",
  ) as InjectionToken<IsCurrentVoyageTeamUsecase>,
};

import type { InjectionToken } from "tsyringe";
import type { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import type { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import type { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import type { GetCurrentVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamIdUsecase";
import type { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";

export const VOYAGE_TEAM_TYPES = {
  VoyageTeamClientPort: Symbol.for(
    "VoyageTeamClientPort",
  ) as InjectionToken<VoyageTeamClientPort>,
  VoyageTeamClientAdapter: Symbol.for(
    "VoyageTeamClientAdapter",
  ) as InjectionToken<VoyageTeamClientAdapter>,
  GetCurrentVoyageTeamUsecase: Symbol.for(
    "GetCurrentVoyageTeamUsecase",
  ) as InjectionToken<GetCurrentVoyageTeamUsecase>,
  GetCurrentVoyageTeamIdUsecase: Symbol.for(
    "GetCurrentVoyageTeamIdUsecase",
  ) as InjectionToken<GetCurrentVoyageTeamIdUsecase>,
  HasVoyageStartedUsecase: Symbol.for(
    "HasVoyageStartedUsecase",
  ) as InjectionToken<HasVoyageStartedUsecase>,
};

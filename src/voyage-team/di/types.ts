import type { InjectionToken } from "tsyringe";
import type { VoyageTeamClientPort } from "@/voyage-team/ports/primary/voyageTeamClientPort";
import type { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import type { GetUserVoyageTeamUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamUsecase";
import type { GetUserVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamIdUsecase";
import type { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";

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
  GetUserVoyageTeamIdUsecase: Symbol.for(
    "GetUserVoyageTeamIdUsecase",
  ) as InjectionToken<GetUserVoyageTeamIdUsecase>,
  HasVoyageStartedUsecase: Symbol.for(
    "HasVoyageStartedUsecase",
  ) as InjectionToken<HasVoyageStartedUsecase>,
};

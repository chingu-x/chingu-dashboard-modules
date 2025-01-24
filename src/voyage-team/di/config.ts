import { container } from "tsyringe";
import { VOYAGE_TEAM_TYPES } from "./types";
import { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import { GetCurrentVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamIdUsecase";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";

export const registerVoyageTeamDependencies = () => {
  // ports

  // adapters
  container.register(VOYAGE_TEAM_TYPES.VoyageTeamClientAdapter, {
    useClass: VoyageTeamClientAdapter,
  });

  // usecases
  container.register(VOYAGE_TEAM_TYPES.GetCurrentVoyageTeamUsecase, {
    useClass: GetCurrentVoyageTeamUsecase,
  });
  container.register(VOYAGE_TEAM_TYPES.GetCurrentVoyageTeamIdUsecase, {
    useClass: GetCurrentVoyageTeamIdUsecase,
  });
  container.register(VOYAGE_TEAM_TYPES.HasVoyageStartedUsecase, {
    useClass: HasVoyageStartedUsecase,
  });
};

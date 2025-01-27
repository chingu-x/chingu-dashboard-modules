import { container } from "tsyringe";
import { VOYAGE_TEAM_TYPES } from "./types";
import { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import { GetUserVoyageTeamUsecase } from "@/voyage-team/application/usecases/getUserVoyageTeamUsecase";
import { GetVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getVoyageTeamIdUsecase";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";

export const registerVoyageTeamDependencies = () => {
  // ports

  // adapters
  container.register(VOYAGE_TEAM_TYPES.VoyageTeamClientAdapter, {
    useClass: VoyageTeamClientAdapter,
  });

  // usecases
  container.register(VOYAGE_TEAM_TYPES.GetUserVoyageTeamUsecase, {
    useClass: GetUserVoyageTeamUsecase,
  });
  container.register(VOYAGE_TEAM_TYPES.GetVoyageTeamIdUsecase, {
    useClass: GetVoyageTeamIdUsecase,
  });
  container.register(VOYAGE_TEAM_TYPES.HasVoyageStartedUsecase, {
    useClass: HasVoyageStartedUsecase,
  });
  container.register(VOYAGE_TEAM_TYPES.IsCurrentVoyageTeamUsecase, {
    useClass: IsCurrentVoyageTeamUsecase,
  });
};

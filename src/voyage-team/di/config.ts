import { container } from "tsyringe";
import { VOYAGE_TEAM_TYPES } from "./types";
import { VoyageTeamClientAdapter } from "@/voyage-team/adapters/primary/voyageTeamClientAdapter";
import { GetCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageTeamUsecase";
import { GetVoyageTeamIdUsecase } from "@/voyage-team/application/usecases/getVoyageTeamIdUsecase";
import { HasVoyageStartedUsecase } from "@/voyage-team/application/usecases/hasVoyageStartedUsecase";
import { IsCurrentVoyageTeamUsecase } from "@/voyage-team/application/usecases/isCurrentVoyageTeamUseCase";
import { GetCurrentVoyageUserIdUsecase } from "@/voyage-team/application/usecases/getCurrentVoyageUserIdUsecase";
import { GetVoyageProjectSubmissionStatusUsecase } from "@/voyage-team/application/usecases/getVoyageProjectSubmissionStatusUsecase";
import { GetVoyageMemberRolesUsecase } from "@/voyage-team/application/usecases/getVoyageMemberRolesUsecase";

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

  container.register(VOYAGE_TEAM_TYPES.GetVoyageTeamIdUsecase, {
    useClass: GetVoyageTeamIdUsecase,
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
};

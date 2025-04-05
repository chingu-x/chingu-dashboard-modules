import { container } from "tsyringe";
import { My_TEAM_TYPES } from "./types";
import { MyTeamApiAdapter } from "@/my-team/adapters/secondary/my-team-api-adapter";
import { MyTeamClientAdapter } from "@/my-team/adapters/primary/my-team-client-adapter";
import { FetchMyTeamUsecase } from "@/my-team/application/usecases/fetch-my-team-usecase";
import { EditHoursUsecase } from "@/my-team/application/usecases/edit-hours-usecase";

export const registerMyTeamDependencies = () => {
  // ports
  container.register(My_TEAM_TYPES.MyTeamApiPort, {
    useClass: MyTeamApiAdapter,
  });

  // usecases
  container.register(My_TEAM_TYPES.FetchMyTeamUsecase, {
    useClass: FetchMyTeamUsecase,
  });
  container.register(My_TEAM_TYPES.EditHoursUsecase, {
    useClass: EditHoursUsecase,
  });

  // adapters
  container.register(My_TEAM_TYPES.MyTeamClientAdapter, {
    useClass: MyTeamClientAdapter,
  });
};

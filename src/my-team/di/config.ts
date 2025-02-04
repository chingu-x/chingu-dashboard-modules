import { container } from "tsyringe";
import { My_TEAM_TYPES } from "./types";
import { MyTeamApiAdapter } from "@/my-team/adapters/secondary/myTeamApiAdapter";
import { MyTeamClientAdapter } from "@/my-team/adapters/primary/myTeamClientAdapter";
import { GetMyTeamUsecase } from "@/my-team/application/usecases/getMyTeamUsecase";
import { EditHoursUsecase } from "@/my-team/application/usecases/editHoursUsecase";

export const registerMyTeamDependencies = () => {
  // ports
  container.register(My_TEAM_TYPES.MyTeamApiPort, {
    useClass: MyTeamApiAdapter,
  });

  // usecases
  container.register(My_TEAM_TYPES.GetMyTeamUsecase, {
    useClass: GetMyTeamUsecase,
  });
  container.register(My_TEAM_TYPES.EditHoursUsecase, {
    useClass: EditHoursUsecase,
  });

  // adapters
  container.register(My_TEAM_TYPES.MyTeamClientAdapter, {
    useClass: MyTeamClientAdapter,
  });
};

import { container } from "tsyringe";
import { MyTeam_TYPES } from "./types";
import { MyTeamApiAdapter } from "@/my-team/adapters/secondary/myTeamApiAdapter";
import { MyTeamClientAdapter } from "@/my-team/adapters/primary/myTeamClientAdapter";
import { GetMyTeamUsecase } from "@/my-team/application/usecases/getMyTeamUsecase";
import { EditHoursUsecase } from "@/my-team/application/usecases/editHoursUsecase";

export const registerMyTeamDependencies = () => {
  // ports
  container.register(MyTeam_TYPES.MyTeamApiPort, {
    useClass: MyTeamApiAdapter,
  });

  // adapters
  container.register(MyTeam_TYPES.MyTeamClientAdapter, {
    useClass: MyTeamClientAdapter,
  });

  // usecases
  container.register(MyTeam_TYPES.GetMyTeamUsecase, {
    useClass: GetMyTeamUsecase,
  });
  container.register(MyTeam_TYPES.EditHoursUsecase, {
    useClass: EditHoursUsecase,
  });
};

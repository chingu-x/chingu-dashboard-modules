import type { InjectionToken } from "tsyringe";
import type { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import type { MyTeamClientAdapter } from "@/my-team/adapters/primary/myTeamClientAdapter";
import type { GetMyTeamUsecase } from "@/my-team/application/usecases/getMyTeamUsecase";
import type { EditHoursUsecase } from "@/my-team/application/usecases/editHoursUsecase";

export const My_TEAM_TYPES = {
  // ports
  MyTeamApiPort: Symbol.for("MyTeamApiPort") as InjectionToken<MyTeamApiPort>,

  // adapters
  MyTeamClientAdapter: Symbol.for(
    "MyTeamClientAdapter",
  ) as InjectionToken<MyTeamClientAdapter>,

  // usecases
  GetMyTeamUsecase: Symbol.for(
    "GetMyTeamUsecase",
  ) as InjectionToken<GetMyTeamUsecase>,
  EditHoursUsecase: Symbol.for(
    "EditHoursUsecase",
  ) as InjectionToken<EditHoursUsecase>,
};

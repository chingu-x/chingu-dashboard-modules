import type { InjectionToken } from "tsyringe";
import type { MyTeamApiPort } from "@/my-team/ports/secondary/myTeamApiPort";
import type { MyTeamClientAdapter } from "@/my-team/adapters/primary/myTeamClientAdapter";
import type { FetchMyTeamUsecase } from "@/my-team/application/usecases/fetchMyTeamUsecase";
import type { EditHoursUsecase } from "@/my-team/application/usecases/editHoursUsecase";

export const My_TEAM_TYPES = {
  // ports
  MyTeamApiPort: Symbol.for("MyTeamApiPort") as InjectionToken<MyTeamApiPort>,

  // usecases
  FetchMyTeamUsecase: Symbol.for(
    "FetchMyTeamUsecase",
  ) as InjectionToken<FetchMyTeamUsecase>,
  EditHoursUsecase: Symbol.for(
    "EditHoursUsecase",
  ) as InjectionToken<EditHoursUsecase>,

  // adapters
  MyTeamClientAdapter: Symbol.for(
    "MyTeamClientAdapter",
  ) as InjectionToken<MyTeamClientAdapter>,
};

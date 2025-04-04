import type { InjectionToken } from "tsyringe";
import type { MyTeamApiPort } from "@/my-team/ports/secondary/my-team-api-port";
import type { MyTeamClientAdapter } from "@/my-team/adapters/primary/my-team-client-adapter";
import type { FetchMyTeamUsecase } from "@/my-team/application/usecases/fetch-my-team-usecase";
import type { EditHoursUsecase } from "@/my-team/application/usecases/edit-hours-usecase";

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

import type { InjectionToken } from "tsyringe";
import type { SprintsApiPort } from "@/sprints/ports/secondary/sprintsApiPort";
import type { SprintsClientAdapter } from "@/sprints/adapters/primary/sprintsClientAdapter";
import type { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";
import type { GetCurrentSprintUsecase } from "@/sprints/application/usecases/getCurrentSprintUsecase";

export const SPRINTS_TYPES = {
  // ports
  SprintsApiPort: Symbol.for(
    "SprintsApiPort",
  ) as InjectionToken<SprintsApiPort>,

  // adapters
  SprintsClientAdapter: Symbol.for(
    "SprintsClientAdapter",
  ) as InjectionToken<SprintsClientAdapter>,

  // usecases
  FetchSprintsUsecase: Symbol.for(
    "FetchSprintsUsecase",
  ) as InjectionToken<FetchSprintsUsecase>,
  GetCurrentSprintUsecase: Symbol.for(
    "GetCurrentSprintUsecase",
  ) as InjectionToken<GetCurrentSprintUsecase>,
};

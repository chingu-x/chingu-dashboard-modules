import type { InjectionToken } from "tsyringe";
import type { IsCurrentSprintUsecase } from "@/sprints/application/usecases/is-current-sprint-usecase";
import type { SprintsApiPort } from "@/sprints/ports/secondary/sprints-api-port";
import type { SprintsClientAdapter } from "@/sprints/adapters/primary/sprints-client-adapter";
import type { FetchSprintsUsecase } from "@/sprints/application/usecases/fetch-sprints-usecase";
import type { GetCurrentSprintUsecase } from "@/sprints/application/usecases/get-current-sprint-usecase";
import type { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/get-sprint-checkin-status-usecase";
import type { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/is-voyage-projest-submission-allowed-usecase";
import type { SubmitWeeklyCheckinUsecase } from "@/sprints/application/usecases/submit-weekly-checkin-usecase";
import type { SubmitVoyageProjectUsecase } from "@/sprints/application/usecases/submit-voyage-project-usecase";
import type { GetSprintByNumberUsecase } from "@/sprints/application/usecases/get-sprint-by-number-usecase";
import type { FetchAllSprintsUsecase } from "@/sprints/application/usecases/fetch-all-sprints-usecase";

export const SPRINTS_TYPES = {
  // ports
  SprintsApiPort: Symbol.for(
    "SprintsApiPort",
  ) as InjectionToken<SprintsApiPort>,

  // usecases
  FetchSprintsUsecase: Symbol.for(
    "FetchSprintsUsecase",
  ) as InjectionToken<FetchSprintsUsecase>,

  GetCurrentSprintUsecase: Symbol.for(
    "GetCurrentSprintUsecase",
  ) as InjectionToken<GetCurrentSprintUsecase>,

  GetSprintCheckinStatusUsecase: Symbol.for(
    "GetSprintCheckinStatusUsecase",
  ) as InjectionToken<GetSprintCheckinStatusUsecase>,

  IsCurrentSprintUsecase: Symbol.for(
    "IsCurrentSprintUsecase",
  ) as InjectionToken<IsCurrentSprintUsecase>,

  IsVoyageProjestSubmissionAllowedUsecase: Symbol.for(
    "IsVoyageProjestSubmissionAllowedUsecase",
  ) as InjectionToken<IsVoyageProjestSubmissionAllowedUsecase>,

  SubmitWeeklyCheckinUsecase: Symbol.for(
    "SubmitWeeklyCheckinUsecase",
  ) as InjectionToken<SubmitWeeklyCheckinUsecase>,

  SubmitVoyageProjectUsecase: Symbol.for(
    "SubmitVoyageProjectUsecase",
  ) as InjectionToken<SubmitVoyageProjectUsecase>,

  GetSprintByNumberUsecase: Symbol.for(
    "GetSprintByNumberUsecase",
  ) as InjectionToken<GetSprintByNumberUsecase>,

  FetchAllSprintsUsecase: Symbol.for(
    "FetchAllSprintsUsecase",
  ) as InjectionToken<FetchAllSprintsUsecase>,

  // adapters
  SprintsClientAdapter: Symbol.for(
    "SprintsClientAdapter",
  ) as InjectionToken<SprintsClientAdapter>,
};

import type { InjectionToken } from "tsyringe";
import type { IsCurrentSprintUsecase } from "@/sprints/application/usecases/isCurrentSprintUsecase";
import type { SprintsApiPort } from "@/sprints/ports/secondary/sprintsApiPort";
import type { SprintsClientAdapter } from "@/sprints/adapters/primary/sprintsClientAdapter";
import type { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";
import type { GetCurrentSprintUsecase } from "@/sprints/application/usecases/getCurrentSprintUsecase";
import type { GetMeetingUsecase } from "@/sprints/application/usecases/getMeetingUsecase";
import type { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/getSprintCheckinStatusUsecase";
import type { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/isVoyageProjestSubmissionAllowedUsecase";

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

  GetMeetingUsecase: Symbol.for(
    "GetMeetingUsecase",
  ) as InjectionToken<GetMeetingUsecase>,

  GetSprintCheckinStatusUsecase: Symbol.for(
    "GetSprintCheckinStatusUsecase",
  ) as InjectionToken<GetSprintCheckinStatusUsecase>,

  IsCurrentSprintUsecase: Symbol.for(
    "IsCurrentSprintUsecase",
  ) as InjectionToken<IsCurrentSprintUsecase>,

  IsVoyageProjestSubmissionAllowedUsecase: Symbol.for(
    "IsVoyageProjestSubmissionAllowedUsecase",
  ) as InjectionToken<IsVoyageProjestSubmissionAllowedUsecase>,
};

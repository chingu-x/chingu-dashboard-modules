import type { InjectionToken } from "tsyringe";
import type { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import type { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprintMeetingClientAdapter";
import type { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import type { GetCurrentSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingId";
import type { GetCurrentSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingUsecase";

export const SPRINT_MEETING_TYPES = {
  // ports
  SprintMeetingApiPort: Symbol.for(
    "SprintMeetingApiPort",
  ) as InjectionToken<SprintMeetingApiPort>,

  // adapters
  SprintMeetingClientAdapter: Symbol.for(
    "SprintMeetingClientAdapter",
  ) as InjectionToken<SprintMeetingClientAdapter>,

  // usecases
  FetchMeetingUsecase: Symbol.for(
    "FetchMeetingUsecase",
  ) as InjectionToken<FetchMeetingUsecase>,

  GetCurrentSprintMeetingIdUsecase: Symbol.for(
    "GetCurrentSprintMeetingIdUsecase",
  ) as InjectionToken<GetCurrentSprintMeetingIdUsecase>,

  GetCurrentSprintMeetingUsecase: Symbol.for(
    "GetCurrentSprintMeetingUsecase",
  ) as InjectionToken<GetCurrentSprintMeetingUsecase>,
};

import type { InjectionToken } from "tsyringe";
import type { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import type { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprintMeetingClientAdapter";
import type { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";

export const SPRINT_MEETING_TYPES = {
  // ports
  SprintMeetingApiPort: Symbol.for(
    "SprintMeetingApiPort"
  ) as InjectionToken<SprintMeetingApiPort>,

  // adapters
  SprintMeetingClientAdapter: Symbol.for(
    "SprintMeetingClientAdapter"
  ) as InjectionToken<SprintMeetingClientAdapter>,

  // usecases
  FetchMeetingUsecase: Symbol.for(
    "FetchMeetingUsecase"
  ) as InjectionToken<FetchMeetingUsecase>,
};

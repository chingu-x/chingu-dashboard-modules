import type { InjectionToken } from "tsyringe";
import type { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import type { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprintMeetingClientAdapter";
import type { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import type { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingId";
import type { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingUsecase";
import type { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";
import type { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/addAgendaTopicUsecase";
import type { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/editAgendaTopicUsecase";

export const SPRINT_MEETING_TYPES = {
  // ports
  SprintMeetingApiPort: Symbol.for(
    "SprintMeetingApiPort",
  ) as InjectionToken<SprintMeetingApiPort>,

  // usecases
  FetchMeetingUsecase: Symbol.for(
    "FetchMeetingUsecase",
  ) as InjectionToken<FetchMeetingUsecase>,

  GetSprintMeetingIdUsecase: Symbol.for(
    "GetSprintMeetingIdUsecase",
  ) as InjectionToken<GetSprintMeetingIdUsecase>,

  GetSprintMeetingUsecase: Symbol.for(
    "GetSprintMeetingUsecase",
  ) as InjectionToken<GetSprintMeetingUsecase>,

  AddMeetingUsecase: Symbol.for(
    "AddMeetingUsecase",
  ) as InjectionToken<AddMeetingUsecase>,

  AddAgendaTopicUsecase: Symbol.for(
    "AddAgendaTopicUsecase",
  ) as InjectionToken<AddAgendaTopicUsecase>,

  EditAgendaTopicUsecase: Symbol.for(
    "EditAgendaTopicUsecase",
  ) as InjectionToken<EditAgendaTopicUsecase>,

  // adapters
  SprintMeetingClientAdapter: Symbol.for(
    "SprintMeetingClientAdapter",
  ) as InjectionToken<SprintMeetingClientAdapter>,
};

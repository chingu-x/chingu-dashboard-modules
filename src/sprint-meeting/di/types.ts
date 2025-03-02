import type { InjectionToken } from "tsyringe";
import type { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import type { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprintMeetingClientAdapter";
import type { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import type { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingId";
import type { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingUsecase";
import type { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";
import type { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/addAgendaTopicUsecase";
import type { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/editAgendaTopicUsecase";
import type { DeleteAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/deleteAgendaTopicUsecase";
import type { EditMeetingUsecase } from "@/sprint-meeting/application/usecases/editMeetingUsecase";
import type { ChangeAgendaTopicStatusUsecase } from "@/sprint-meeting/application/usecases/changeAgendaTopicStatusUsecase";
import type { AddSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/addSprintMeetingSectionUsecase";
import type { GetAgendaByIdUsecase } from "@/sprint-meeting/application/usecases/getAgendaByIdUsecase";
import type { GetSprintReviewQuestionsUsecase } from "@/sprint-meeting/application/usecases/getSprintReviewQuestionsUsecase";
import type { EditSprintReviewSectionUsecase } from "@/sprint-meeting/application/usecases/editSprintReviewSectionUsecase";
import type { GetSprintPlanningQuestionsUsecase } from "@/sprint-meeting/application/usecases/getSprintPlanningQuestionsUsecase";
import type { EditSprintPlanningSectionUsecase } from "@/sprint-meeting/application/usecases/editSprintPlanningSectionUsecase";
import type { GetIncompleteTopicsUsecase } from "@/sprint-meeting/application/usecases/getIncompleteTopicsUsecase";

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

  DeleteAgendaTopicUsecase: Symbol.for(
    "DeleteAgendaTopicUsecase",
  ) as InjectionToken<DeleteAgendaTopicUsecase>,

  EditMeetingUsecase: Symbol.for(
    "EditMeetingUsecase",
  ) as InjectionToken<EditMeetingUsecase>,

  ChangeAgendaTopicStatusUsecase: Symbol.for(
    "ChangeAgendaTopicStatusUsecase",
  ) as InjectionToken<ChangeAgendaTopicStatusUsecase>,

  AddSprintMeetingSectionUsecase: Symbol.for(
    "AddSprintMeetingSectionUsecase",
  ) as InjectionToken<AddSprintMeetingSectionUsecase>,

  GetAgendaByIdUsecase: Symbol.for(
    "GetAgendaByIdUsecase",
  ) as InjectionToken<GetAgendaByIdUsecase>,

  GetSprintReviewQuestionsUsecase: Symbol.for(
    "GetSprintReviewQuestionsUsecase",
  ) as InjectionToken<GetSprintReviewQuestionsUsecase>,

  EditSprintReviewSectionUsecase: Symbol.for(
    "EditSprintReviewSectionUsecase",
  ) as InjectionToken<EditSprintReviewSectionUsecase>,

  GetSprintPlanningQuestionsUsecase: Symbol.for(
    "GetSprintPlanningQuestionsUsecase",
  ) as InjectionToken<GetSprintPlanningQuestionsUsecase>,

  EditSprintPlanningSectionUsecase: Symbol.for(
    "EditSprintPlanningSectionUsecase",
  ) as InjectionToken<EditSprintPlanningSectionUsecase>,

  GetIncompleteTopicsUsecase: Symbol.for(
    "GetIncompleteTopicsUsecase",
  ) as InjectionToken<GetIncompleteTopicsUsecase>,

  // adapters
  SprintMeetingClientAdapter: Symbol.for(
    "SprintMeetingClientAdapter",
  ) as InjectionToken<SprintMeetingClientAdapter>,
};

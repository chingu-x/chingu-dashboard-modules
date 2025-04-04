import type { InjectionToken } from "tsyringe";
import type { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprint-meeting-api-port";
import type { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprint-meeting-client-adapter";
import type { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetch-meeting-usecase";
import type { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-id-usecase";
import type { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-usecase";
import type { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/add-meeting-usecase";
import type { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/add-agenda-topic-usecase";
import type { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/edit-agenda-topic-usecase";
import type { DeleteAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/delete-agenda-topic-usecase";
import type { EditMeetingUsecase } from "@/sprint-meeting/application/usecases/edit-meeting-usecase";
import type { ChangeAgendaTopicStatusUsecase } from "@/sprint-meeting/application/usecases/change-agenda-topic-status-usecase";
import type { AddSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/add-sprint-meeting-section-usecase";
import type { GetAgendaByIdUsecase } from "@/sprint-meeting/application/usecases/get-agenda-by-id-usecase";
import type { GetSprintReviewQuestionsUsecase } from "@/sprint-meeting/application/usecases/get-sprint-review-questions-usecase";
import type { EditSprintReviewSectionUsecase } from "@/sprint-meeting/application/usecases/edit-sprint-review-section-usecase";
import type { GetSprintPlanningQuestionsUsecase } from "@/sprint-meeting/application/usecases/get-sprint-planning-questions-usecase";
import type { EditSprintPlanningSectionUsecase } from "@/sprint-meeting/application/usecases/edit-sprint-planning-section-usecase";
import type { GetIncompleteTopicsUsecase } from "@/sprint-meeting/application/usecases/get-incomplete-topics-usecase";
import type { GetCompletedTopicsUsecase } from "@/sprint-meeting/application/usecases/get-completed-topics-usecase";
import type { FetchSprintMeetingFormUsecase } from "@/sprint-meeting/application/usecases/fetch-sprint-meeting-form-usecase";
import type { GetSprintMeetingSectionResponsesUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-section-responses-usecase";

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

  GetCompletedTopicsUsecase: Symbol.for(
    "GetCompletedTopicsUsecase",
  ) as InjectionToken<GetCompletedTopicsUsecase>,

  FetchSprintMeetingFormUsecase: Symbol.for(
    "FetchSprintMeetingFormUsecase",
  ) as InjectionToken<FetchSprintMeetingFormUsecase>,

  GetSprintMeetingSectionResponsesUsecase: Symbol.for(
    "GetSprintMeetingSectionResponsesUsecase",
  ) as InjectionToken<GetSprintMeetingSectionResponsesUsecase>,

  // adapters
  SprintMeetingClientAdapter: Symbol.for(
    "SprintMeetingClientAdapter",
  ) as InjectionToken<SprintMeetingClientAdapter>,
};

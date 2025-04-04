import { container } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "./types";
import { SprintMeetingApiAdapter } from "@/sprint-meeting/adapters/secondary/sprint-meeting-api-adapter";
import { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprint-meeting-client-adapter";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetch-meeting-usecase";
import { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-id-usecase";
import { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-usecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/add-meeting-usecase";
import { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/add-agenda-topic-usecase";
import { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/edit-agenda-topic-usecase";
import { DeleteAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/delete-agenda-topic-usecase";
import { EditMeetingUsecase } from "@/sprint-meeting/application/usecases/edit-meeting-usecase";
import { ChangeAgendaTopicStatusUsecase } from "@/sprint-meeting/application/usecases/change-agenda-topic-status-usecase";
import { AddSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/add-sprint-meeting-section-usecase";
import { GetAgendaByIdUsecase } from "@/sprint-meeting/application/usecases/get-agenda-by-id-usecase";
import { GetSprintReviewQuestionsUsecase } from "@/sprint-meeting/application/usecases/get-sprint-review-questions-usecase";
import { EditSprintReviewSectionUsecase } from "@/sprint-meeting/application/usecases/edit-sprint-review-section-usecase";
import { GetSprintPlanningQuestionsUsecase } from "@/sprint-meeting/application/usecases/get-sprint-planning-questions-usecase";
import { EditSprintPlanningSectionUsecase } from "@/sprint-meeting/application/usecases/edit-sprint-planning-section-usecase";
import { GetIncompleteTopicsUsecase } from "@/sprint-meeting/application/usecases/get-incomplete-topics-usecase";
import { GetCompletedTopicsUsecase } from "@/sprint-meeting/application/usecases/get-completed-topics-usecase";
import { FetchSprintMeetingFormUsecase } from "@/sprint-meeting/application/usecases/fetch-sprint-meeting-form-usecase";
import { GetSprintMeetingSectionResponsesUsecase } from "@/sprint-meeting/application/usecases/get-sprint-meeting-section-responses-usecase";

export const registerSprintMeetingDependencies = () => {
  // ports
  container.register(SPRINT_MEETING_TYPES.SprintMeetingApiPort, {
    useClass: SprintMeetingApiAdapter,
  });

  // usecases
  container.register(SPRINT_MEETING_TYPES.FetchMeetingUsecase, {
    useClass: FetchMeetingUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetSprintMeetingIdUsecase, {
    useClass: GetSprintMeetingIdUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetSprintMeetingUsecase, {
    useClass: GetSprintMeetingUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.AddMeetingUsecase, {
    useClass: AddMeetingUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.AddAgendaTopicUsecase, {
    useClass: AddAgendaTopicUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.EditAgendaTopicUsecase, {
    useClass: EditAgendaTopicUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.DeleteAgendaTopicUsecase, {
    useClass: DeleteAgendaTopicUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.EditMeetingUsecase, {
    useClass: EditMeetingUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.ChangeAgendaTopicStatusUsecase, {
    useClass: ChangeAgendaTopicStatusUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.AddSprintMeetingSectionUsecase, {
    useClass: AddSprintMeetingSectionUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetAgendaByIdUsecase, {
    useClass: GetAgendaByIdUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetSprintReviewQuestionsUsecase, {
    useClass: GetSprintReviewQuestionsUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.EditSprintReviewSectionUsecase, {
    useClass: EditSprintReviewSectionUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetSprintPlanningQuestionsUsecase, {
    useClass: GetSprintPlanningQuestionsUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.EditSprintPlanningSectionUsecase, {
    useClass: EditSprintPlanningSectionUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetIncompleteTopicsUsecase, {
    useClass: GetIncompleteTopicsUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetCompletedTopicsUsecase, {
    useClass: GetCompletedTopicsUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.FetchSprintMeetingFormUsecase, {
    useClass: FetchSprintMeetingFormUsecase,
  });

  container.register(
    SPRINT_MEETING_TYPES.GetSprintMeetingSectionResponsesUsecase,
    {
      useClass: GetSprintMeetingSectionResponsesUsecase,
    },
  );

  // adapters
  container.register(SPRINT_MEETING_TYPES.SprintMeetingClientAdapter, {
    useClass: SprintMeetingClientAdapter,
  });
};

import { container } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "./types";
import { SprintMeetingApiAdapter } from "@/sprint-meeting/adapters/secondary/sprintMeetingApiAdapter";
import { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprintMeetingClientAdapter";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import { GetSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingId";
import { GetSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getSprintMeetingUsecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";
import { AddAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/addAgendaTopicUsecase";
import { EditAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/editAgendaTopicUsecase";
import { DeleteAgendaTopicUsecase } from "@/sprint-meeting/application/usecases/deleteAgendaTopicUsecase";
import { EditMeetingUsecase } from "@/sprint-meeting/application/usecases/editMeetingUsecase";
import { ChangeAgendaTopicStatusUsecase } from "@/sprint-meeting/application/usecases/changeAgendaTopicStatusUsecase";
import { AddSprintMeetingSectionUsecase } from "@/sprint-meeting/application/usecases/addSprintMeetingSectionUsecase";
import { GetAgendaByIdUsecase } from "@/sprint-meeting/application/usecases/getAgendaByIdUsecase";
import { GetSprintReviewQuestionsUsecase } from "@/sprint-meeting/application/usecases/getSprintReviewQuestionsUsecase";
import { EditSprintReviewSectionUsecase } from "@/sprint-meeting/application/usecases/editSprintReviewSectionUsecase";
import { GetSprintPlanningQuestionsUsecase } from "@/sprint-meeting/application/usecases/getSprintPlanningQuestionsUsecase";

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

  // adapters
  container.register(SPRINT_MEETING_TYPES.SprintMeetingClientAdapter, {
    useClass: SprintMeetingClientAdapter,
  });
};

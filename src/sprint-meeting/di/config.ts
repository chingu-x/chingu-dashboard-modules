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

  // adapters
  container.register(SPRINT_MEETING_TYPES.SprintMeetingClientAdapter, {
    useClass: SprintMeetingClientAdapter,
  });
};

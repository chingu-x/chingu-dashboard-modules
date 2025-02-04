import { container } from "tsyringe";
import { SPRINT_MEETING_TYPES } from "./types";
import { SprintMeetingApiAdapter } from "@/sprint-meeting/adapters/secondary/sprintMeetingApiAdapter";
import { SprintMeetingClientAdapter } from "@/sprint-meeting/adapters/primary/sprintMeetingClientAdapter";
import { FetchMeetingUsecase } from "@/sprint-meeting/application/usecases/fetchMeetingUsecase";
import { GetCurrentSprintMeetingIdUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingId";
import { GetCurrentSprintMeetingUsecase } from "@/sprint-meeting/application/usecases/getCurrentSprintMeetingUsecase";
import { AddMeetingUsecase } from "@/sprint-meeting/application/usecases/addMeetingUsecase";

export const registerSprintMeetingDependencies = () => {
  // ports
  container.register(SPRINT_MEETING_TYPES.SprintMeetingApiPort, {
    useClass: SprintMeetingApiAdapter,
  });

  // usecases
  container.register(SPRINT_MEETING_TYPES.FetchMeetingUsecase, {
    useClass: FetchMeetingUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetCurrentSprintMeetingIdUsecase, {
    useClass: GetCurrentSprintMeetingIdUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.GetCurrentSprintMeetingUsecase, {
    useClass: GetCurrentSprintMeetingUsecase,
  });

  container.register(SPRINT_MEETING_TYPES.AddMeetingUsecase, {
    useClass: AddMeetingUsecase,
  });

  // adapters
  container.register(SPRINT_MEETING_TYPES.SprintMeetingClientAdapter, {
    useClass: SprintMeetingClientAdapter,
  });
};

import { container } from "tsyringe";
import { SPRINTS_TYPES } from "./types";
import { IsCurrentSprintUsecase } from "@/sprints/application/usecases/isCurrentSprintUsecase";
import { SprintsApiAdapter } from "@/sprints/adapters/secondary/sprintsApiAdapter";
import { SprintsClientAdapter } from "@/sprints/adapters/primary/sprintsClientAdapter";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";
import { GetCurrentSprintUsecase } from "@/sprints/application/usecases/getCurrentSprintUsecase";
import { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/getSprintCheckinStatusUsecase";
import { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/isVoyageProjestSubmissionAllowedUsecase";
import { SubmitWeeklyCheckinUsecase } from "@/sprints/application/usecases/submitWeeklyCheckinUsecase";
import { SubmitVoyageProjectUsecase } from "@/sprints/application/usecases/submitVoyageProjectUsecase";

export const registerSprintsDependencies = () => {
  // ports
  container.register(SPRINTS_TYPES.SprintsApiPort, {
    useClass: SprintsApiAdapter,
  });

  // usecases
  container.register(SPRINTS_TYPES.FetchSprintsUsecase, {
    useClass: FetchSprintsUsecase,
  });

  container.register(SPRINTS_TYPES.GetCurrentSprintUsecase, {
    useClass: GetCurrentSprintUsecase,
  });

  container.register(SPRINTS_TYPES.GetSprintCheckinStatusUsecase, {
    useClass: GetSprintCheckinStatusUsecase,
  });

  container.register(SPRINTS_TYPES.IsCurrentSprintUsecase, {
    useClass: IsCurrentSprintUsecase,
  });

  container.register(SPRINTS_TYPES.IsVoyageProjestSubmissionAllowedUsecase, {
    useClass: IsVoyageProjestSubmissionAllowedUsecase,
  });

  container.register(SPRINTS_TYPES.SubmitWeeklyCheckinUsecase, {
    useClass: SubmitWeeklyCheckinUsecase,
  });

  container.register(SPRINTS_TYPES.SubmitVoyageProjectUsecase, {
    useClass: SubmitVoyageProjectUsecase,
  });

  // adapters
  container.register(SPRINTS_TYPES.SprintsClientAdapter, {
    useClass: SprintsClientAdapter,
  });
};

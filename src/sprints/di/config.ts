import { container } from "tsyringe";
import { SPRINTS_TYPES } from "./types";
import { IsCurrentSprintUsecase } from "@/sprints/application/usecases/is-current-sprint-usecase";
import { SprintsApiAdapter } from "@/sprints/adapters/secondary/sprints-api-adapter";
import { SprintsClientAdapter } from "@/sprints/adapters/primary/sprints-client-adapter";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetch-sprints-usecase";
import { GetCurrentSprintUsecase } from "@/sprints/application/usecases/get-current-sprint-usecase";
import { GetSprintCheckinStatusUsecase } from "@/sprints/application/usecases/get-sprint-checkin-status-usecase";
import { IsVoyageProjestSubmissionAllowedUsecase } from "@/sprints/application/usecases/is-voyage-projest-submission-allowed-usecase";
import { SubmitWeeklyCheckinUsecase } from "@/sprints/application/usecases/submit-weekly-checkin-usecase";
import { SubmitVoyageProjectUsecase } from "@/sprints/application/usecases/submit-voyage-project-usecase";
import { GetSprintByNumberUsecase } from "@/sprints/application/usecases/get-sprint-by-number-usecase";
import { FetchAllSprintsUsecase } from "@/sprints/application/usecases/fetch-all-sprints-usecase";

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

  container.register(SPRINTS_TYPES.GetSprintByNumberUsecase, {
    useClass: GetSprintByNumberUsecase,
  });

  container.register(SPRINTS_TYPES.FetchAllSprintsUsecase, {
    useClass: FetchAllSprintsUsecase,
  });

  // adapters
  container.register(SPRINTS_TYPES.SprintsClientAdapter, {
    useClass: SprintsClientAdapter,
  });
};

import { container } from "tsyringe";
import { SPRINTS_TYPES } from "./types";
import { SprintsApiAdapter } from "@/sprints/adapters/secondary/sprintsApiAdapter";
import { SprintsClientAdapter } from "@/sprints/adapters/primary/sprintsClientAdapter";
import { FetchSprintsUsecase } from "@/sprints/application/usecases/fetchSprintsUsecase";

export const registerSprintsDependencies = () => {
  // ports
  container.register(SPRINTS_TYPES.SprintsApiPort, {
    useClass: SprintsApiAdapter,
  });

  // adapters
  container.register(SPRINTS_TYPES.SprintsClientAdapter, {
    useClass: SprintsClientAdapter,
  });

  // usecases
  container.register(SPRINTS_TYPES.FetchSprintsUsecase, {
    useClass: FetchSprintsUsecase,
  });
};

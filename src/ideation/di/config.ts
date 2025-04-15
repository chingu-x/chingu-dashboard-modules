import { container } from "tsyringe";
import { IDEATION_TYPES } from "./types";
import { IdeationApiAdapter } from "@/ideation/adapters/secondary/ideation-api-adapter";
import { IdeationClientAdapter } from "@/ideation/adapters/primary/ideation-client-adapter";
import { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";

export const registerIdeationDependencies = () => {
  // ports
  container.register(IDEATION_TYPES.IdeationApiPort, {
    useClass: IdeationApiAdapter,
  });

  // usecases
  container.register(IDEATION_TYPES.FetchIdeationUsecase, {
    useClass: FetchIdeationUsecase,
  });

  container.register(IDEATION_TYPES.AddIdeationUsecase, {
    useClass: AddIdeationUsecase,
  });

  // adapters
  container.register(IDEATION_TYPES.IdeationClientAdapter, {
    useClass: IdeationClientAdapter,
  });
};

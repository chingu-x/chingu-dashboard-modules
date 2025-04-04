import { container } from "tsyringe";
import { VOYAGE_RESOURCES_TYPES } from "./types";
import { VoyageResourcesApiAdapter } from "@/voyage-resources/adapters/secondary/voyage-resources-api-adapter";
import { FetchVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/fetch-voyage-resources-usecase";
import { VoyageResourcesClientAdapter } from "@/voyage-resources/adapters/primary/voyage-resources-client-adapter";

export const registerVoyageResourcesDependencies = () => {
  // ports
  container.register(VOYAGE_RESOURCES_TYPES.VoyageResourcesApiPort, {
    useClass: VoyageResourcesApiAdapter,
  });

  // usecases
  container.register(VOYAGE_RESOURCES_TYPES.FetchVoyageResourcesUsecase, {
    useClass: FetchVoyageResourcesUsecase,
  });

  // adapters
  container.register(VOYAGE_RESOURCES_TYPES.VoyageResourcesClientAdapter, {
    useClass: VoyageResourcesClientAdapter,
  });
};

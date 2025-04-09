import { container } from "tsyringe";
import { VOYAGE_RESOURCES_TYPES } from "./types";
import { VoyageResourcesApiAdapter } from "@/voyage-resources/adapters/secondary/voyage-resources-api-adapter";
import { FetchVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/fetch-voyage-resources-usecase";
import { VoyageResourcesClientAdapter } from "@/voyage-resources/adapters/primary/voyage-resources-client-adapter";
import { AddVoyageResourceUsecase } from "@/voyage-resources/application/usecases/add-voyage-resource-usecase";
import { DeleteVoyageResourceUsecase } from "@/voyage-resources/application/usecases/delete-voyage-resource-usecase";
import { SortVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/sort-voyage-resources-usecase";

export const registerVoyageResourcesDependencies = () => {
  // ports
  container.register(VOYAGE_RESOURCES_TYPES.VoyageResourcesApiPort, {
    useClass: VoyageResourcesApiAdapter,
  });

  // usecases
  container.register(VOYAGE_RESOURCES_TYPES.FetchVoyageResourcesUsecase, {
    useClass: FetchVoyageResourcesUsecase,
  });

  container.register(VOYAGE_RESOURCES_TYPES.AddVoyageResourceUsecase, {
    useClass: AddVoyageResourceUsecase,
  });

  container.register(VOYAGE_RESOURCES_TYPES.DeleteVoyageResourceUsecase, {
    useClass: DeleteVoyageResourceUsecase,
  });

  container.register(VOYAGE_RESOURCES_TYPES.SortVoyageResourcesUsecase, {
    useClass: SortVoyageResourcesUsecase,
  });

  // adapters
  container.register(VOYAGE_RESOURCES_TYPES.VoyageResourcesClientAdapter, {
    useClass: VoyageResourcesClientAdapter,
  });
};

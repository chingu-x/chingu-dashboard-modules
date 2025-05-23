import type { InjectionToken } from "tsyringe";
import type { VoyageResourcesApiPort } from "@/voyage-resources/ports/secondary/voyage-resources-api-port";
import type { FetchVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/fetch-voyage-resources-usecase";
import type { VoyageResourcesClientAdapter } from "@/voyage-resources/adapters/primary/voyage-resources-client-adapter";
import type { AddVoyageResourceUsecase } from "@/voyage-resources/application/usecases/add-voyage-resource-usecase";
import type { DeleteVoyageResourceUsecase } from "@/voyage-resources/application/usecases/delete-voyage-resource-usecase";
import type { SortVoyageResourcesUsecase } from "@/voyage-resources/application/usecases/sort-voyage-resources-usecase";

export const VOYAGE_RESOURCES_TYPES = {
  // ports
  VoyageResourcesApiPort: Symbol.for(
    "VoyageResourcesApiPort",
  ) as InjectionToken<VoyageResourcesApiPort>,

  // usecases
  FetchVoyageResourcesUsecase: Symbol.for(
    "FetchVoyageResourcesUsecase",
  ) as InjectionToken<FetchVoyageResourcesUsecase>,

  AddVoyageResourceUsecase: Symbol.for(
    "AddVoyageResourceUsecase",
  ) as InjectionToken<AddVoyageResourceUsecase>,

  DeleteVoyageResourceUsecase: Symbol.for(
    "DeleteVoyageResourceUsecase",
  ) as InjectionToken<DeleteVoyageResourceUsecase>,

  SortVoyageResourcesUsecase: Symbol.for(
    "SortVoyageResourcesUsecase",
  ) as InjectionToken<SortVoyageResourcesUsecase>,

  // adapters
  VoyageResourcesClientAdapter: Symbol.for(
    "VoyageResourcesClientAdapter",
  ) as InjectionToken<VoyageResourcesClientAdapter>,
};

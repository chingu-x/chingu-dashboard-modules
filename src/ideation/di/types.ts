import type { InjectionToken } from "tsyringe";
import type { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import type { IdeationClientAdapter } from "@/ideation/adapters/primary/ideation-client-adapter";
import type { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import type { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";
import type { EditIdeationUsecase } from "@/ideation/application/usecases/edit-ideation-usecase";
import type { DeleteIdeationUsecase } from "@/ideation/application/usecases/delete-ideation-usecase";

export const IDEATION_TYPES = {
  // ports
  IdeationApiPort: Symbol.for(
    "IdeationApiPort",
  ) as InjectionToken<IdeationApiPort>,

  // usecases
  FetchIdeationUsecase: Symbol.for(
    "FetchIdeationUsecase",
  ) as InjectionToken<FetchIdeationUsecase>,

  AddIdeationUsecase: Symbol.for(
    "AddIdeationUsecase",
  ) as InjectionToken<AddIdeationUsecase>,

  EditIdeationUsecase: Symbol.for(
    "EditIdeationUsecase",
  ) as InjectionToken<EditIdeationUsecase>,

  DeleteIdeationUsecase: Symbol.for(
    "DeleteIdeationUsecase",
  ) as InjectionToken<DeleteIdeationUsecase>,

  // adapters
  IdeationClientAdapter: Symbol.for(
    "IdeationClientAdapter",
  ) as InjectionToken<IdeationClientAdapter>,
};

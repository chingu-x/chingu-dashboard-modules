import type { InjectionToken } from "tsyringe";
import type { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import type { TechStackClientAdapter } from "@/tech-stack/adapters/primary/tech-stack-client-adapter";
import type { FetchTechStackUsecase } from "@/tech-stack/application/usecases/fetch-tech-stack-usecase";
import type { AddTechStackItemUsecase } from "@/tech-stack/application/usecases/add-tech-stack-item-usecase";
import type { EditTechStackItemUsecase } from "@/tech-stack/application/usecases/edit-tech-stack-item-usecase";
import type { DeleteTechStackItemUsecase } from "@/tech-stack/application/usecases/delete-tech-stack-item-usecase";
import type { AddTechStackItemVoteUsecase } from "@/tech-stack/application/usecases/add-tech-stack-item-vote-usecase";

export const TECH_STACK_TYPES = {
  // ports
  TechStackApiPort: Symbol.for(
    "TechStackApiPort",
  ) as InjectionToken<TechStackApiPort>,

  // usecases
  FetchTechStackUsecase: Symbol.for(
    "FetchTechStackUsecase",
  ) as InjectionToken<FetchTechStackUsecase>,

  AddTechStackItemUsecase: Symbol.for(
    "AddTechStackItemUsecase",
  ) as InjectionToken<AddTechStackItemUsecase>,

  EditTechStackItemUsecase: Symbol.for(
    "EditTechStackItemUsecase",
  ) as InjectionToken<EditTechStackItemUsecase>,

  DeleteTechStackItemUsecase: Symbol.for(
    "DeleteTechStackItemUsecase",
  ) as InjectionToken<DeleteTechStackItemUsecase>,

  AddTechStackItemVoteUsecase: Symbol.for(
    "AddTechStackItemVoteUsecase",
  ) as InjectionToken<AddTechStackItemVoteUsecase>,

  // adapters
  TechStackClientAdapter: Symbol.for(
    "TechStackClientAdapter",
  ) as InjectionToken<TechStackClientAdapter>,
};

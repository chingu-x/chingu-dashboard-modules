import type { InjectionToken } from "tsyringe";
import type { TechStackApiPort } from "@/tech-stack/ports/secondary/tech-stack-api-port";
import type { TechStackClientAdapter } from "@/tech-stack/adapters/primary/tech-stack-client-adapter";
import type { FetchTechStackUsecase } from "@/tech-stack/application/usecases/fetch-tech-stack-usecase";

export const TECH_STACK_TYPES = {
  // ports
  TechStackApiPort: Symbol.for(
    "TechStackApiPort",
  ) as InjectionToken<TechStackApiPort>,

  // usecases
  FetchTechStackUsecase: Symbol.for(
    "FetchTechStackUsecase",
  ) as InjectionToken<FetchTechStackUsecase>,

  // adapters
  TechStackClientAdapter: Symbol.for(
    "TechStackClientAdapter",
  ) as InjectionToken<TechStackClientAdapter>,
};

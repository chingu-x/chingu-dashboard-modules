import { container } from "tsyringe";
import { TECH_STACK_TYPES } from "./types";
import { TechStackApiAdapter } from "@/tech-stack/adapters/secondary/tech-stack-api-adapter";
import { TechStackClientAdapter } from "@/tech-stack/adapters/primary/tech-stack-client-adapter";
import { FetchTechStackUsecase } from "@/tech-stack/application/usecases/fetch-tech-stack-usecase";
import { AddTechStackItemUsecase } from "@/tech-stack/application/usecases/add-tech-stack-item-usecase";
import { EditTechStackItemUsecase } from "@/tech-stack/application/usecases/edit-tech-stack-item-usecase";

export const registerTechStackDependencies = () => {
  // ports
  container.register(TECH_STACK_TYPES.TechStackApiPort, {
    useClass: TechStackApiAdapter,
  });

  // usecases
  container.register(TECH_STACK_TYPES.FetchTechStackUsecase, {
    useClass: FetchTechStackUsecase,
  });

  container.register(TECH_STACK_TYPES.AddTechStackItemUsecase, {
    useClass: AddTechStackItemUsecase,
  });

  container.register(TECH_STACK_TYPES.EditTechStackItemUsecase, {
    useClass: EditTechStackItemUsecase,
  });

  // adapters
  container.register(TECH_STACK_TYPES.TechStackClientAdapter, {
    useClass: TechStackClientAdapter,
  });
};

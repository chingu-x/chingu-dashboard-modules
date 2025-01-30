import { container } from "tsyringe";
import { FORMS_TYPES } from "./types";
import { FormsApiAdapter } from "@/forms/adapters/secondary/formsApiAdapter";
import { FormsClientAdapter } from "@/forms/adapters/primary/formsClientAdapter";
import { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";

export const registerFormsDependencies = () => {
  // ports
  container.register(FORMS_TYPES.FormsApiPort, { useClass: FormsApiAdapter });

  // adapters
  container.register(FORMS_TYPES.FormsClientAdapter, {
    useClass: FormsClientAdapter,
  });

  // usecases
  container.register(FORMS_TYPES.FetchFormQuestionsUsecase, {
    useClass: FetchFormQuestionsUsecase,
  });
};

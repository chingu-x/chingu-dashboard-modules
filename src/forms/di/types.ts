import type { InjectionToken } from "tsyringe";
import type { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import type { FormsClientAdapter } from "@/forms/adapters/primary/formsClientAdapter";
import type { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";

export const FORMS_TYPES = {
  // ports
  FormsApiPort: Symbol.for("FormsApiPort") as InjectionToken<FormsApiPort>,

  // adapters
  FormsClientAdapter: Symbol.for(
    "FormsClientAdapter"
  ) as InjectionToken<FormsClientAdapter>,

  // usecases
  FetchFormQuestionsUsecase: Symbol.for(
    "FetchFormQuestionsUsecase"
  ) as InjectionToken<FetchFormQuestionsUsecase>,
};

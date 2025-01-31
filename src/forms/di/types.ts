import type { InjectionToken } from "tsyringe";
import type { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import type { FormsClientAdapter } from "@/forms/adapters/primary/formsClientAdapter";
import type { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";
import type { FetchWeeklyCheckinFormUsecase } from "@/forms/application/usecases/fetchWeeklyCheckinFormUsecase";
import type { SubmitWeeklyCheckinFormUsecase } from "@/forms/application/usecases/submitWeeklyCheckinFormUsecase";

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

  FetchWeeklyCheckinFormUsecase: Symbol.for(
    "FetchWeeklyCheckinFormUsecase"
  ) as InjectionToken<FetchWeeklyCheckinFormUsecase>,

  SubmitWeeklyCheckinFormUsecase: Symbol.for(
    "SubmitWeeklyCheckinFormUsecase"
  ) as InjectionToken<SubmitWeeklyCheckinFormUsecase>,
};

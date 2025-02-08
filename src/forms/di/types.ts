import type { InjectionToken } from "tsyringe";
import type { FormsApiPort } from "@/forms/ports/secondary/formApiPort";
import type { FormsClientAdapter } from "@/forms/adapters/primary/formsClientAdapter";
import type { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetchFormQuestionsUsecase";
import type { FetchWeeklyCheckinFormUsecase } from "@/forms/application/usecases/fetchWeeklyCheckinFormUsecase";
import type { FetchSubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/fetchSubmitVoyageProjectFormUsecase";
import type { SubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/submitVoyageProjectFormUsecase";

export const FORMS_TYPES = {
  // ports
  FormsApiPort: Symbol.for("FormsApiPort") as InjectionToken<FormsApiPort>,

  // usecases
  FetchFormQuestionsUsecase: Symbol.for(
    "FetchFormQuestionsUsecase",
  ) as InjectionToken<FetchFormQuestionsUsecase>,

  FetchWeeklyCheckinFormUsecase: Symbol.for(
    "FetchWeeklyCheckinFormUsecase",
  ) as InjectionToken<FetchWeeklyCheckinFormUsecase>,

  FetchSubmitVoyageProjectFormUsecase: Symbol.for(
    "FetchSubmitVoyageProjectFormUsecase",
  ) as InjectionToken<FetchSubmitVoyageProjectFormUsecase>,

  SubmitVoyageProjectFormUsecase: Symbol.for(
    "SubmitVoyageProjectFormUsecase",
  ) as InjectionToken<SubmitVoyageProjectFormUsecase>,

  // adapters
  FormsClientAdapter: Symbol.for(
    "FormsClientAdapter",
  ) as InjectionToken<FormsClientAdapter>,
};

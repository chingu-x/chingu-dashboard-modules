import type { InjectionToken } from "tsyringe";
import type { FormsApiPort } from "@/forms/ports/secondary/form-api-port";
import type { FormsClientAdapter } from "@/forms/adapters/primary/forms-client-adapter";
import type { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetch-form-questions-usecase";
import type { FetchWeeklyCheckinFormUsecase } from "@/forms/application/usecases/fetch-weekly-checkin-form-usecase";
import type { FetchSubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/fetch-submit-voyage-project-form-usecase";

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

  // adapters
  FormsClientAdapter: Symbol.for(
    "FormsClientAdapter",
  ) as InjectionToken<FormsClientAdapter>,
};

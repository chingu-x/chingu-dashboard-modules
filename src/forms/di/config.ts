import { container } from "tsyringe";
import { FORMS_TYPES } from "./types";
import { FormsApiAdapter } from "@/forms/adapters/secondary/forms-api-adapter";
import { FormsClientAdapter } from "@/forms/adapters/primary/forms-client-adapter";
import { FetchFormQuestionsUsecase } from "@/forms/application/usecases/fetch-form-questions-usecase";
import { FetchWeeklyCheckinFormUsecase } from "@/forms/application/usecases/fetch-weekly-checkin-form-usecase";
import { FetchSubmitVoyageProjectFormUsecase } from "@/forms/application/usecases/fetch-submit-voyage-project-form-usecase";

export const registerFormsDependencies = () => {
  // ports
  container.register(FORMS_TYPES.FormsApiPort, { useClass: FormsApiAdapter });

  // usecases
  container.register(FORMS_TYPES.FetchFormQuestionsUsecase, {
    useClass: FetchFormQuestionsUsecase,
  });

  container.register(FORMS_TYPES.FetchWeeklyCheckinFormUsecase, {
    useClass: FetchWeeklyCheckinFormUsecase,
  });

  container.register(FORMS_TYPES.FetchSubmitVoyageProjectFormUsecase, {
    useClass: FetchSubmitVoyageProjectFormUsecase,
  });

  // adapters
  container.register(FORMS_TYPES.FormsClientAdapter, {
    useClass: FormsClientAdapter,
  });
};

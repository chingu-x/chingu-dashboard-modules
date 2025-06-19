import type { InjectionToken } from "tsyringe";
import type { CalendarClientAdapter } from "@/calendar/adapters/primary/calendar-client-adapter";
import type { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-date-usecase";
import type { GetVoyageEndDateUsecase } from "@/calendar/application/usecases/get-voyage-end-date-usecase";

export const CALENDAR_TYPES = {
  // ports

  // usecases
  GetVoyageStartDateUsecase: Symbol.for(
    "GetVoyageStartDateUsecase",
  ) as InjectionToken<GetVoyageStartDateUsecase>,

  GetVoyageEndDateUsecase: Symbol.for(
    "GetVoyageEndDateUsecase",
  ) as InjectionToken<GetVoyageEndDateUsecase>,

  // adapters
  CalendarClientAdapter: Symbol.for(
    "CalendarClientAdapter",
  ) as InjectionToken<CalendarClientAdapter>,
};

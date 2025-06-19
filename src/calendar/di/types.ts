import type { InjectionToken } from "tsyringe";
import type { CalendarClientAdapter } from "@/calendar/adapters/primary/calendar-client-adapter";
import type { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-date-usecase";

export const CALENDAR_TYPES = {
  // ports

  // usecases
  GetVoyageStartDateUsecase: Symbol.for(
    "GetVoyageStartDateUsecase",
  ) as InjectionToken<GetVoyageStartDateUsecase>,

  // adapters
  CalendarClientAdapter: Symbol.for(
    "CalendarClientAdapter",
  ) as InjectionToken<CalendarClientAdapter>,
};

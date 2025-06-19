import { container } from "tsyringe";
import { CALENDAR_TYPES } from "./types";
import { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-data-usecase";
import { CalendarClientAdapter } from "@/calendar/adapters/primary/calendar-client-adapter";

export const registerCalendarDependencies = () => {
  // ports

  // usecases
  container.register(CALENDAR_TYPES.GetVoyageStartDateUsecase, {
    useClass: GetVoyageStartDateUsecase,
  });

  // adapters
  container.register(CALENDAR_TYPES.CalendarClientAdapter, {
    useClass: CalendarClientAdapter,
  });
};

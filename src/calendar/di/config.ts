import { container } from "tsyringe";
import { CALENDAR_TYPES } from "./types";
import { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-date-usecase";
import { CalendarClientAdapter } from "@/calendar/adapters/primary/calendar-client-adapter";
import { GetVoyageEndDateUsecase } from "@/calendar/application/usecases/get-voyage-end-date-usecase";
import { IsWithinSprintRangeUsecase } from "@/calendar/application/usecases/is-within-sprint-range-usecase";

export const registerCalendarDependencies = () => {
  // ports

  // usecases
  container.register(CALENDAR_TYPES.GetVoyageStartDateUsecase, {
    useClass: GetVoyageStartDateUsecase,
  });

  container.register(CALENDAR_TYPES.GetVoyageEndDateUsecase, {
    useClass: GetVoyageEndDateUsecase,
  });

  container.register(CALENDAR_TYPES.IsWithinSprintRangeUsecase, {
    useClass: IsWithinSprintRangeUsecase,
  });

  // adapters
  container.register(CALENDAR_TYPES.CalendarClientAdapter, {
    useClass: CalendarClientAdapter,
  });
};

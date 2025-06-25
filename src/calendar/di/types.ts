import type { InjectionToken } from "tsyringe";
import type { CalendarClientAdapter } from "@/calendar/adapters/primary/calendar-client-adapter";
import type { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-date-usecase";
import type { GetVoyageEndDateUsecase } from "@/calendar/application/usecases/get-voyage-end-date-usecase";
import type { IsWithinSprintRangeUsecase } from "@/calendar/application/usecases/is-within-sprint-range-usecase";
import type { GetSelectedSprintUsecase } from "@/calendar/application/usecases/get-selected-sprint-usecase";
import type { GetMeetingEventDataUsecase } from "@/calendar/application/usecases/get-meeting-event-data-usecase";

export const CALENDAR_TYPES = {
  // ports

  // usecases
  GetVoyageStartDateUsecase: Symbol.for(
    "GetVoyageStartDateUsecase",
  ) as InjectionToken<GetVoyageStartDateUsecase>,

  GetVoyageEndDateUsecase: Symbol.for(
    "GetVoyageEndDateUsecase",
  ) as InjectionToken<GetVoyageEndDateUsecase>,

  IsWithinSprintRangeUsecase: Symbol.for(
    "IsWithinSprintRangeUsecase",
  ) as InjectionToken<IsWithinSprintRangeUsecase>,

  GetSelectedSprintUsecase: Symbol.for(
    "GetSelectedSprintUsecase",
  ) as InjectionToken<GetSelectedSprintUsecase>,

  GetMeetingEventDataUsecase: Symbol.for(
    "GetMeetingEventDataUsecase",
  ) as InjectionToken<GetMeetingEventDataUsecase>,

  // adapters
  CalendarClientAdapter: Symbol.for(
    "CalendarClientAdapter",
  ) as InjectionToken<CalendarClientAdapter>,
};

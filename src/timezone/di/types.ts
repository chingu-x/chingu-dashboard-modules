import type { InjectionToken } from "tsyringe";
import type { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/update-directory-with-current-time-usecase";
import type { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/get-meeting-long-date-time-format-usecase";
import type { TimezoneClientAdapter } from "@/timezone/adapters/primary/timezone-client-adapter";
import type { GetMeetingDateUsecase } from "@/timezone/application/usecases/get-meeting-date-usecase";
import type { GetMeetingTimeWithTZAbbreviationUsecase } from "@/timezone/application/usecases/get-meeting-time-with-tz-abbreviation-usecase";
import type { GetSprintStartDateBySprintNumberUsecase } from "@/timezone/application/usecases/get-sprint-start-date-by-sprint-number-usecase";
import type { GetSprintEndDateBySprintNumberUsecase } from "@/timezone/application/usecases/get-sprint-end-date-by-sprint-number-usecase";
import type { GetVoyageResourceDateUsecase } from "@/timezone/application/usecases/get-voyage-resource-added-date-usecase";

export const TIME_ZONE_TYPES = {
  // ports

  // usecases
  UpdateDirectoryWithCurrentTimeUsecase: Symbol.for(
    "UpdateDirectoryWithCurrentTimeUsecase",
  ) as InjectionToken<UpdateDirectoryWithCurrentTimeUsecase>,

  GetMeetingLongDateTimeFormatUsecase: Symbol.for(
    "GetMeetingLongDateTimeFormatUsecase",
  ) as InjectionToken<GetMeetingLongDateTimeFormatUsecase>,

  GetMeetingDateUsecase: Symbol.for(
    "GetMeetingDateUsecase",
  ) as InjectionToken<GetMeetingDateUsecase>,

  GetMeetingTimeWithTZAbbreviationUsecase: Symbol.for(
    "GetMeetingTimeWithTZAbbreviationUsecase",
  ) as InjectionToken<GetMeetingTimeWithTZAbbreviationUsecase>,

  GetSprintStartDateBySprintNumberUsecase: Symbol.for(
    "GetSprintStartDateBySprintNumberUsecase",
  ) as InjectionToken<GetSprintStartDateBySprintNumberUsecase>,

  GetSprintEndDateBySprintNumberUsecase: Symbol.for(
    "GetSprintEndDateBySprintNumberUsecase",
  ) as InjectionToken<GetSprintEndDateBySprintNumberUsecase>,

  GetVoyageResourceDateUsecase: Symbol.for(
    "GetVoyageResourceDateUsecase",
  ) as InjectionToken<GetVoyageResourceDateUsecase>,

  // adapters
  TimezoneClientAdapter: Symbol.for(
    "TimezoneClientAdapter",
  ) as InjectionToken<TimezoneClientAdapter>,
};

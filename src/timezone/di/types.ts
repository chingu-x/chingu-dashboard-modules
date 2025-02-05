import type { InjectionToken } from "tsyringe";
import type { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";
import type { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";
import type { TimezoneClientAdapter } from "@/timezone/adapters/primary/timezoneClientAdapter";
import type { GetMeetingDateUsecase } from "@/timezone/application/usecases/getMeetingDateUsecase";
import type { GetMeetingTimeWithTZAbbreviationUsecase } from "@/timezone/application/usecases/getMeetingTimeWithTZAbbreviationUsecase";

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

  // adapters
  TimezoneClientAdapter: Symbol.for(
    "TimezoneClientAdapter",
  ) as InjectionToken<TimezoneClientAdapter>,
};

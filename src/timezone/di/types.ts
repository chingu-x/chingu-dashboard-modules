import type { InjectionToken } from "tsyringe";
import type { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";
import type { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";

export const TIME_ZONE_TYPES = {
  // ports

  // adapters

  // usecases
  UpdateDirectoryWithCurrentTimeUsecase: Symbol.for(
    "UpdateDirectoryWithCurrentTimeUsecase",
  ) as InjectionToken<UpdateDirectoryWithCurrentTimeUsecase>,

  GetMeetingLongDateTimeFormatUsecase: Symbol.for(
    "GetMeetingLongDateTimeFormatUsecase",
  ) as InjectionToken<GetMeetingLongDateTimeFormatUsecase>,
};

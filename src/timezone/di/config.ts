import { container } from "tsyringe";
import { TIME_ZONE_TYPES } from "./types";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";
import { TimezoneClientAdapter } from "@/timezone/adapters/primary/timezoneClientAdapter";
import { GetMeetingDateUsecase } from "@/timezone/application/usecases/getMeetingDateUsecase";

export const registerTimezoneDependencies = () => {
  // ports

  // usecases
  container.register(TIME_ZONE_TYPES.UpdateDirectoryWithCurrentTimeUsecase, {
    useClass: UpdateDirectoryWithCurrentTimeUsecase,
  });

  container.register(TIME_ZONE_TYPES.GetMeetingLongDateTimeFormatUsecase, {
    useClass: GetMeetingLongDateTimeFormatUsecase,
  });

  container.register(TIME_ZONE_TYPES.GetMeetingDateUsecase, {
    useClass: GetMeetingDateUsecase,
  });

  // adapters
  container.register(TIME_ZONE_TYPES.TimezoneClientAdapter, {
    useClass: TimezoneClientAdapter,
  });
};

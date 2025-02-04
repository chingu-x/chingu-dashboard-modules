import { container } from "tsyringe";
import { TIME_ZONE_TYPES } from "./types";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";
import { TimezoneClientAdapter } from "@/timezone/adapters/primary/timezoneClientAdapter";

export const registerTimezoneDependencies = () => {
  // ports

  // usecases
  container.register(TIME_ZONE_TYPES.UpdateDirectoryWithCurrentTimeUsecase, {
    useClass: UpdateDirectoryWithCurrentTimeUsecase,
  });

  container.register(TIME_ZONE_TYPES.GetMeetingLongDateTimeFormatUsecase, {
    useClass: GetMeetingLongDateTimeFormatUsecase,
  });

  // adapters
  container.register(TIME_ZONE_TYPES.TimezoneClientAdapter, {
    useClass: TimezoneClientAdapter,
  });
};

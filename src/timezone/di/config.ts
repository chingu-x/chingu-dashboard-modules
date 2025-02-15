import { container } from "tsyringe";
import { TIME_ZONE_TYPES } from "./types";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/getMeetingLongDateTimeFormatUsecase";
import { TimezoneClientAdapter } from "@/timezone/adapters/primary/timezoneClientAdapter";
import { GetMeetingDateUsecase } from "@/timezone/application/usecases/getMeetingDateUsecase";
import { GetMeetingTimeWithTZAbbreviationUsecase } from "@/timezone/application/usecases/getMeetingTimeWithTZAbbreviationUsecase";
import { GetSprintStartDateBySprintNumberUsecase } from "@/timezone/application/usecases/getSprintStartDateBySprintNumberUsecase";

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

  container.register(TIME_ZONE_TYPES.GetMeetingTimeWithTZAbbreviationUsecase, {
    useClass: GetMeetingTimeWithTZAbbreviationUsecase,
  });

  container.register(TIME_ZONE_TYPES.GetSprintStartDateBySprintNumberUsecase, {
    useClass: GetSprintStartDateBySprintNumberUsecase,
  });

  // adapters
  container.register(TIME_ZONE_TYPES.TimezoneClientAdapter, {
    useClass: TimezoneClientAdapter,
  });
};

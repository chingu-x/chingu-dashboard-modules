import { container } from "tsyringe";
import { TIME_ZONE_TYPES } from "./types";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/update-directory-with-current-time-usecase";
import { GetMeetingLongDateTimeFormatUsecase } from "@/timezone/application/usecases/get-meeting-long-date-time-format-usecase";
import { TimezoneClientAdapter } from "@/timezone/adapters/primary/timezone-client-adapter";
import { GetMeetingDateUsecase } from "@/timezone/application/usecases/get-meeting-date-usecase";
import { GetMeetingTimeWithTZAbbreviationUsecase } from "@/timezone/application/usecases/get-meeting-time-with-tz-abbreviation-usecase";
import { GetSprintStartDateBySprintNumberUsecase } from "@/timezone/application/usecases/get-sprint-start-date-by-sprint-number-usecase";
import { GetSprintEndDateBySprintNumberUsecase } from "@/timezone/application/usecases/get-sprint-end-date-by-sprint-number-usecase";

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

  container.register(TIME_ZONE_TYPES.GetSprintEndDateBySprintNumberUsecase, {
    useClass: GetSprintEndDateBySprintNumberUsecase,
  });

  // adapters
  container.register(TIME_ZONE_TYPES.TimezoneClientAdapter, {
    useClass: TimezoneClientAdapter,
  });
};

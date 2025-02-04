import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TimezoneClientPort } from "@/timezone/ports/primary/timezoneClientPort";
import { GetMeetingLongDateTimeFormatClientRequestDto } from "@/timezone/application/dtos/request.dto";
import { GetMeetingLongDateTimeFormatResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class TimezoneClientAdapter implements TimezoneClientPort {
  constructor(
    @inject(TYPES.GetMeetingLongDateTimeFormatUsecase)
    private readonly getMeetingLongDateTimeFormatUsecase: GetMeetingLongDateTimeFormatUsecase,
  ) {}

  getMeetingLongDateTimeFormat({
    meetingDateTime,
    timezone,
  }: GetMeetingLongDateTimeFormatClientRequestDto): GetMeetingLongDateTimeFormatResponseDto {
    return this.getMeetingLongDateTimeFormatUsecase.execute({
      meetingDateTime,
      timezone,
    });
  }
}

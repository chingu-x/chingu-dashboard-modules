import { injectable } from "tsyringe";
import { format, isSameDay } from "date-fns";
import { GetMeetingEventDataUsecaseDto } from "@/calendar/application/dtos/usecase.dto";
import { GetMeetingEventDataResponseDto } from "@/calendar/application/dtos/response.dto";
import convertStringToDate from "@/timezone/application/utils/convert-string-to-date";

@injectable()
export class GetMeetingEventDataUsecase {
  execute({
    data,
    date,
    timezone,
  }: GetMeetingEventDataUsecaseDto): GetMeetingEventDataResponseDto {
    const meeting = data?.find((event) =>
      isSameDay(convertStringToDate({ dateTime: event.date, timezone }), date),
    );

    if (meeting)
      return {
        ...meeting,
        date: format(
          convertStringToDate({ dateTime: meeting.date, timezone }),
          "h:mm a",
        ),
      };

    return undefined;
  }
}

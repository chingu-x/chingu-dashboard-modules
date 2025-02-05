import { injectable } from "tsyringe";
import { GetMeetingDateResponseDto } from "@/timezone/application/dtos/response.dto";
import { GetMeetingDateUsecaseDto } from "../dtos/usecase.dto";

// returns date of when the meeting is
// if meeting is today it will return "today"
// if meeting is tomorrow it will return "tomorrow" etc
@injectable()
export class GetMeetingDateUsecase {
  execute({
    dateTime,
    timezone,
  }: GetMeetingDateUsecaseDto): GetMeetingDateResponseDto {
    return convertStringToDate({ dateTime: meetingDateTime, timezone });
  }
}

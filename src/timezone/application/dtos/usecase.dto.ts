import type { GetMeetingLongDateTimeFormatClientRequestDto } from "./request.dto";
import type { MyTeam } from "@/my-team/application/types";

export interface UpdateDirectoryWithCurrentTimeUsecaseRequestDto {
  data: MyTeam;
}

export type GetMeetingLongDateTimeFormatUsecaseDto =
  GetMeetingLongDateTimeFormatClientRequestDto;

export interface GetMeetingDateUsecaseDto {
  dateTime: string;
  timezone: string;
}

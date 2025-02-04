import type {
  AddMeetingClientRequestDto,
  FetchMeetingClientRequestDto,
  GetCurrentSprintMeetingClientRequestDto,
  GetCurrentSprintMeetingIdClientRequesDto,
} from "./request.dto";

export type AddMeetingUsecaseDto = AddMeetingClientRequestDto;

export type FetchMeetingUsecaseDto = FetchMeetingClientRequestDto;

export type GetCurrentSprintMeetingIdUsecaseDto =
  GetCurrentSprintMeetingIdClientRequesDto;

export type GetCurrentSprintMeetingUsecaseDto =
  GetCurrentSprintMeetingClientRequestDto;

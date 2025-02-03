import type {
  FetchFormQuestionsClientRequestDto,
  FetchSubmitVoyageProjectFormApiRequestDto,
  FetchWeeklyCheckinFormApiRequestDto,
  SubmitVoyageProjectFormClientRequestDto,
  SubmitWeeklyCheckinFormClientRequestDto,
} from "./request.dto";

export type FetchFormQuestionsUsecaseDto = FetchFormQuestionsClientRequestDto;

export type FetchSubmitVoyageProjectFormUsecaseDto =
  FetchSubmitVoyageProjectFormApiRequestDto;

export type FetchWeeklyCheckinFormUsecaseDto =
  FetchWeeklyCheckinFormApiRequestDto;

export type SubmitVoyageProjectFormUsecaseDto =
  SubmitVoyageProjectFormClientRequestDto;

export type SubmitWeeklyCheckinFormUsecaseDto =
  SubmitWeeklyCheckinFormClientRequestDto;

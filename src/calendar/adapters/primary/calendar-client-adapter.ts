import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { CalendarClientPort } from "@/calendar/ports/primary/calendar-client-port";
import {
  GetVoyageEndDateClientRequestDto,
  GetVoyageStartDateClientRequestDto,
  IsWithinSprintRangeClientRequestDto,
} from "@/calendar/application/dtos/request.dto";
import {
  GetVoyageEndDateResponseDto,
  GetVoyageStartDateResponseDto,
  IsWithinSprintRangeResponseDto,
} from "@/calendar/application/dtos/response.dto";
import { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-date-usecase";
import { GetVoyageEndDateUsecase } from "@/calendar/application/usecases/get-voyage-end-date-usecase";

@injectable()
export class CalendarClientAdapter implements CalendarClientPort {
  constructor(
    @inject(TYPES.GetVoyageStartDateUsecase)
    private readonly getVoyageStartDateUsecase: GetVoyageStartDateUsecase,

    @inject(TYPES.GetVoyageEndDateUsecase)
    private readonly getVoyageEndDateUsecase: GetVoyageEndDateUsecase,

    @inject(TYPES.IsWithinSprintRangeUsecase)
    private readonly isWithinSprintRangeUsecase: IsWithinSprintRangeUsecase,
  ) {}

  getVoyageStartDate({
    sprintsData,
  }: GetVoyageStartDateClientRequestDto): GetVoyageStartDateResponseDto {
    return this.getVoyageStartDateUsecase.execute({ sprintsData });
  }

  getVoyageEndDate({
    sprintsData,
  }: GetVoyageEndDateClientRequestDto): GetVoyageEndDateResponseDto {
    return this.getVoyageEndDateUsecase.execute({ sprintsData });
  }

  isWithinSprintRange({
    currentDate,
  }: IsWithinSprintRangeClientRequestDto): IsWithinSprintRangeResponseDto {
    return this.isWithinSprintRangeUsecase.execute({ currentDate });
  }
}

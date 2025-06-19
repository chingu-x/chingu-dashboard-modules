import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { CalendarClientPort } from "@/calendar/ports/primary/calendar-client-port";
import {
  GetVoyageEndDateClientRequestDto,
  GetVoyageStartDateClientRequestDto,
} from "@/calendar/application/dtos/request.dto";
import {
  GetVoyageEndDateResponseDto,
  GetVoyageStartDateResponseDto,
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
}

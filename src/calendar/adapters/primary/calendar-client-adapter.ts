import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { CalendarClientPort } from "@/calendar/ports/primary/calendar-client-port";
import { GetVoyageStartDateClientRequestDto } from "@/calendar/application/dtos/request.dto";
import { GetVoyageStartDateResponseDto } from "@/calendar/application/dtos/response.dto";
import { GetVoyageStartDateUsecase } from "@/calendar/application/usecases/get-voyage-start-data-usecase";

@injectable()
export class CalendarClientAdapter implements CalendarClientPort {
  constructor(
    @inject(TYPES.GetVoyageStartDateUsecase)
    private readonly getVoyageStartDateUsecase: GetVoyageStartDateUsecase,
  ) {}

  getVoyageStartDate({
    sprintsData,
  }: GetVoyageStartDateClientRequestDto): GetVoyageStartDateResponseDto {
    return this.getVoyageStartDateUsecase.execute({ sprintsData });
  }
}

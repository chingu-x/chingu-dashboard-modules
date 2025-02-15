import { injectable } from "tsyringe";
import convertStringToDate from "@/timezone/application/utils/convertStringToDate";
import { GetSprintEndDateBySprintNumberUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetSprintEndDateBySprintNumberResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class GetSprintEndDateBySprintNumberUsecase {
  execute({
    sprint,
    timezone,
  }: GetSprintEndDateBySprintNumberUsecaseDto): GetSprintEndDateBySprintNumberResponseDto {
    return convertStringToDate({ dateTime: sprint.endDate, timezone });
  }
}

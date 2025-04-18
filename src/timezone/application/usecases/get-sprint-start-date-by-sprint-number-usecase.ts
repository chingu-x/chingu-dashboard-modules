import { injectable } from "tsyringe";
import convertStringToDate from "@/timezone/application/utils/convert-string-to-date";
import { GetSprintStartDateBySprintNumberUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetSprintStartDateBySprintNumberResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class GetSprintStartDateBySprintNumberUsecase {
  execute({
    sprint,
    timezone,
  }: GetSprintStartDateBySprintNumberUsecaseDto): GetSprintStartDateBySprintNumberResponseDto {
    return convertStringToDate({ dateTime: sprint.startDate, timezone });
  }
}

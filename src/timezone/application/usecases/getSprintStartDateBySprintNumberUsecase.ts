import { injectable } from "tsyringe";
import convertStringToDate from "@/timezone/application/utils/convertStringToDate";
import { GetSprintStartDateBySprintNumberUsecaseDto } from "@/timezone/application/dtos/usecase.dto";
import { GetSprintStartDateBySprintNumberResponseDto } from "@/timezone/application/dtos/response.dto";

@injectable()
export class GetSprintStartDateBySprintNumberUsecase {
  execute({
    sprints,
    sprintNumber,
    timezone,
  }: GetSprintStartDateBySprintNumberUsecaseDto): GetSprintStartDateBySprintNumberResponseDto {}
}

import { injectable } from "tsyringe";
import { GetVoyageStartDateUsecaseDto } from "@/calendar/application/dtos/usecase.dto";
import { GetVoyageStartDateResponseDto } from "@/calendar/application/dtos/response.dto";

@injectable()
export class GetVoyageStartDateUsecase {
  execute({
    sprintsData,
  }: GetVoyageStartDateUsecaseDto): GetVoyageStartDateResponseDto {
    return sprintsData?.find((sprint) => Number(sprint.number) === 1)
      ?.startDate;
  }
}

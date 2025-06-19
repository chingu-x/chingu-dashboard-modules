import { injectable } from "tsyringe";
import { GetVoyageEndDateUsecaseDto } from "@/calendar/application/dtos/usecase.dto";
import { GetVoyageEndDateResponseDto } from "@/calendar/application/dtos/response.dto";

@injectable()
export class GetVoyageEndDateUsecase {
  execute({
    sprintsData,
  }: GetVoyageEndDateUsecaseDto): GetVoyageEndDateResponseDto {
    return sprintsData?.find((sprint) => Number(sprint.number) === 6)?.endDate;
  }
}

import { injectable } from "tsyringe";
import { GetCompletedTopicsUsecaseDto } from "@/sprint-meeting/application/dtos/usecase.dto";
import { GetCompletedTopicsResponseDto } from "@/sprint-meeting/application/dtos/response.dto";

@injectable()
export class GetCompletedTopicsUsecase {
  execute({
    agendas,
  }: GetCompletedTopicsUsecaseDto): GetCompletedTopicsResponseDto {
    return agendas.filter((agenda) => agenda.status === true);
  }
}
